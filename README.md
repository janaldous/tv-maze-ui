# TV Maze UI

Search and see details of TV Shows using TV Maze api

# Getting Started for Development

docs/openapi.yaml: TVmaze api OpenApi 3 doc was manually created

1. Run `npm install` to install dependencies
2. Run `npm start` to start the development webserver

# TV Maze Api Client

Change OpenAPI specs in `docs/openapi.yaml`

Run to generate the client:
`npm run openapi:generate-client`

# Production Ready Code

The production ready code can be generated using CRA's command: `npm run build`. An example of the generated code could be found in the /build folder.

# Running Docker for Production

The Dockerfile already has the commands to build the production code and can copy the production code to the the nginx folders.

Please run:

1. `docker build -t tv-maze-ui .`
2. `docker run -d -p 80:80 tv-maze-ui`

# Node Version

Node version: 16.5.0
