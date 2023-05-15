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
                date: "1998-11-20T00:00:00.000Z",
                city: "São Paulo",
                cep: "01153-000",
                country: "Brasil",
                state: "São Paulo",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Heitor",
                lastName: "Nascimento",
                email: "heitornascimento39@gmail.com",
                tel: "(+11) 83 93244-6543",
                password: "653263",
                date: "1992-12-07T00:00:00.000Z",
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
                email: "matiasdario75@gmail.com",
                tel: "(+55) 83 98640-4371",
                password: "123456",
                date: "2005-03-06T00:00:00.000Z",
                city: "Areial",
                cep: "58140-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Johnny",
                lastName: "Walker",
                email: "johnnywalker42@gmail.com",
                tel: "(+55) 83 91421-5235",
                password: "351342",
                date: "2006-08-23T00:00:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
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
                date: "2001-01-08T11:00:00.000Z",
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
                date: "2003-12-01T00:00:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Lorenzo",
                lastName: "Ferreira",
                email: "lorenzoferreira45@gmail.com",
                tel: "(+55) 83 91333-3947",
                password: "832735",
                date: "2000-01-02T00:00:00.000Z",
                city: "Areial",
                cep: "58140-000",
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
                date: "1997-12-31T00:00:00.000Z",
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
                date: "2002-04-02T00:00:00.000Z",
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
                date: "1999-05-24T00:00:00.000Z",
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
                date: "2023-02-14T00:00:00.000Z",
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
                date: "2005-12-13T00:00:00.000Z",
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
                date: "2001-03-23T00:00:00.000Z",
                city: "Esperança",
                cep: "58135-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Arthur",
                lastName: "Marino",
                email: "arthurmarino90@gmail.com",
                tel: "(+55) 83 92413-9384",
                password: "297845",
                date: "2004-11-29T00:00:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Alice",
                lastName: "Zuberg",
                email: "alicezuberg00@gmail.com",
                tel: "(+55) 83 91832-1332",
                password: "028279",
                date: "2005-03-01T00:00:00.000Z",
                city: "Campina Grande",
                cep: "58400-180",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Eduardo",
                lastName: "Costa",
                email: "eduardocosta51@gmail.com",
                tel: "(+55) 83 94322-6323",
                password: "543124",
                date: "2008-11-24T00:00:00.000Z",
                city: "Porto Alegre",
                cep: "90010-170",
                country: "Brasil",
                state: "Rio Grande do Sul",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Diogo",
                lastName: "Dias",
                email: "diogodias13@gmail.com",
                tel: "(+55) 83 93322-2452",
                password: "364436",
                date: "2002-08-14T00:00:00.000Z",
                city: "Esperança",
                cep: "58135-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Danny",
                lastName: "Martins",
                email: "dannymartins49@gmail.com",
                tel: "(+55) 83 92344-6546",
                password: "723446",
                date: "1990-04-27T00:00:00.000Z",
                city: "Porto Alegre",
                cep: "90010-170",
                country: "Brasil",
                state: "Rio Grande do Sul",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Elizabeth",
                lastName: "Neves",
                email: "elizabethneves95@gmail.com",
                tel: "(+55) 83 95134-3447",
                password: "532342",
                date: "2001-12-26T00:00:00.000Z",
                city: "Areia",
                cep: "58397-000",
                country: "Brasil",
                state: "Paraíba",
            },
        }),
        prismaClient.users.create({
            data: {
                firstName: "Benjamin",
                lastName: "Neto",
                email: "benjaminneto93@gmail.com",
                tel: "(+55) 83 95462-2534",
                password: "654542",
                date: "2007-05-10T00:00:00.000Z",
                city: "São Paulo",
                cep: "01153-000",
                country: "Brasil",
                state: "São Paulo",
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
