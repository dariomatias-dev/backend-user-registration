import { FastifyInstance } from 'fastify';
import * as z from 'zod';

import prismaClient from '../prisma';

const routes = async (server: FastifyInstance) => {
    server.get('/users/count', async () => {
        const count = prismaClient.users.count();

        return count;
    });

    server.get('/user/:id', async (request) => {
        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const id = createUserParams.parse(request.params);

        const user = await prismaClient.users.findUnique({
            where: id,
        });

        return user;
    });

    server.get('/users/:skip', async (request) => {
        const createUsersParams = z.object({
            skip: z.string(),
        });

        const { skip } = createUsersParams.parse(request.query);

        const users = await prismaClient.users.findMany({
            take: 5,
            skip: Number(skip),
            orderBy: {
                createdAt: 'asc',
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                date: true,
            },
        });

        return {
            users,
            skip: Number(skip) + 5,
        };
    });

    server.post('/user', async (request) => {
        const createUserBody = z.object({
            firstName: z.string().min(3).max(20),
            lastName: z.string().min(3).max(20),
            email: z.string().email(),
            tel: z.string().min(19).max(19),
            password: z.string().min(3).max(20),
            date: z.string().datetime(),
            city: z.string().min(3).max(40),
            cep: z.string().min(9).max(9),
            country: z.string().min(3).max(40),
            state: z.string().min(3).max(40),
        });

        const data = createUserBody.parse(request.body);

        await prismaClient.users.create({
            data: data,
        });
    });

    server.patch('/user/:id', async (request) => {
        const createUserBody = z.object({
            firstName: z.string().min(3).max(20).optional(),
            lastName: z.string().min(3).max(20).optional(),
            email: z.string().email().optional(),
            tel: z.string().min(19).max(19).optional(),
            password: z.string().min(3).max(20).optional(),
            date: z.string().datetime().optional(),
            city: z.string().min(3).max(40).optional(),
            cep: z.string().min(9).max(9).optional(),
            country: z.string().min(3).max(40).optional(),
            state: z.string().min(3).max(40).optional(),
        });

        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const data = createUserBody.parse(request.body);
        const id = createUserParams.parse(request.params);

        await prismaClient.users.update({
            where: id,
            data,
        });
    });

    server.delete('/user/:id', async (request) => {
        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const id = createUserParams.parse(request.params);

        await prismaClient.users.delete({
            where: id,
        });
    });
};

export default routes;
