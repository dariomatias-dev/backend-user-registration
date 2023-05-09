import fastify from "fastify";
import cors from "@fastify/cors";

import routes from "./routes";

const server = fastify({ logger: true });

server.register(cors);
server.register(routes);

server
    .listen({ port: 3333 })
    .then(() => {
        console.log("Server running on PORT 3333!");
    });
