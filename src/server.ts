import fastify from "fastify";

const server = fastify({ logger: true });

server
    .listen({ port: 3333 })
    .then(() => {
        console.log("Server running on PORT 3333!");
    });
