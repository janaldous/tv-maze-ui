# TV Maze UI

Search and see details of TV Shows using TV Maze api

# Getting Started

docs/openapi.yaml: TVmaze api OpenApi 3 doc was manually created

1. Run `npm install` to install dependencies
2. Run `npm start` to start the development webserver

# TV Maze Api Client

Change OpenAPI specs in `docs/openapi.yaml`

`npm run openapi:generate-client`

# Production ready code

The production ready code was generated using CRA's command: `npm run build`. The generated code could be found in the /build folder.

# Running Docker

The Dockerfile already has the commands to build the production code and can copy the production code inside a nginx image.

Please run:

1. `docker build -t tv-maze-ui .`
2. `docker run -d -p 80:80 tv-maze-ui`
