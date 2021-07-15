# build production code stage
FROM node:16 as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html