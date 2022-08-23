const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "v0.23.0",
        title: "Cicero REST API Server",
        description: "Exposes the Cicero Engine as a RESTful service."
    },
    host: "localhost:6001",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "draft",
        },
        {
            "name": "parse",
        },
        {
            "name": "invoke",
        },
        {
            "name": "initialize",
        },
        {
            "name": "trigger",
        },
        {
            "name": "compile",
        },
        {
            "name": "archive",
        },
        {
            "name": "normalize",
        }
    ],


}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')       
})