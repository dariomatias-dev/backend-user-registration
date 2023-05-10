import prismaClient from "../src/prisma";

async function run() {
    await prismaClient.users.deleteMany();

    await Promise.all([
        prismaClient.users.create({
            data: {
                firstName: "Antonio",
                lastName: "Silva",
                email: "antoniosilva01@gmail.com",
                tel: "(+11) 83 99270-1038",
                password: "098765",
                date: "2021-11-20T02:28:00.000Z",
                city: "São Paulo",
                cep: "01153-000",
                country: "Brasil",
                state: "São Paulo",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Dário",
                lastName: "Matias",
                email: "dariomatias75@gmail.com",
                tel: "(+55) 83 98640-4371",
                password: "123456",
                date: "2023-05-10T08:34:00.000Z",
                city: "Areial",
                cep: "58140-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "José",
                lastName: "Santos",
                email: "josesantos09@gmail.com",
                tel: "(+55) 83 90286-3067",
                password: "928403",
                date: "2019-01-08T11:49:00.000Z",
                city: "Esperança",
                cep: "58135-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Silva",
                lastName: "Andrade",
                email: "silvaandrade91@gmail.com",
                tel: "(+55) 83 91205-0284",
                password: "039628",
                date: "2020-12-01T09:12:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Marcos",
                lastName: "Dias",
                email: "marcosdias86@gmail.com",
                tel: "(+84) 83 99284-0138",
                password: "818492",
                date: "2018-12-31T03:12:00.000Z",
                city: "Natal",
                cep: "59025-090",
                country: "Brasil",
                state: "Rio Grande do Norte",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Diego",
                lastName: "Ferreira",
                email: "diegoferreira10@gmail.com",
                tel: "(+55) 83 91254-0124",
                password: "528572",
                date: "2017-04-02T09:13:00.000Z",
                city: "Pocinhos",
                cep: "58150-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Frede",
                lastName: "Gonsalves",
                email: "fredegonsalves23@gmail.com",
                tel: "(+55) 83 90123-9284",
                password: "023874",
                date: "2022-05-24T12:35:00.000Z",
                city: "Areia",
                cep: "58397-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Luiz",
                lastName: "Machado",
                email: "luizmachado92@gmail.com",
                tel: "(+51) 83 91248-9182",
                password: "183294",
                date: "2023-02-14T23:53:00.000Z",
                city: "Porto Alegre",
                cep: "90010-170",
                country: "Brasil",
                state: "Rio Grande do Sul",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Luan",
                lastName: "Liberato",
                email: "luanliberato55@gmail.com",
                tel: "(+55) 83 93372-9148",
                password: "847928",
                date: "2005-12-13T23:02:00.000Z",
                city: "Esperança",
                cep: "58135-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Ana",
                lastName: "Maria",
                email: "anamaria87@gmail.com",
                tel: "(+55) 83 93522-0372",
                password: "047955",
                date: "2001-03-23T11:02:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
    ]);
}

run()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prismaClient.$disconnect();
        process.exit(1);
    });
