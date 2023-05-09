import { FastifyInstance } from 'fastify';

const routes = async (server: FastifyInstance) => {
    server.get('/', () => {
        return "Funcionou!";
    });
};

export default routes;
