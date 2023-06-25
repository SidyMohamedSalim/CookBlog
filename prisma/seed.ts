import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { article } from "../src/types/article";

const prisma = new PrismaClient();

const main = async () => {
  const author = {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isAdmin: true,
    name: faker.person.firstName(),
    updatedAt: faker.date.recent(),
  };

  await prisma.author.create({
    data: author,
  });

  const authorId = await prisma.author.findFirst({});

  // loop for 100 times
  const articlesPromises = [];
  for (let i = 0; i < 10; i++) {
    const article = {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraphs(),
      image: faker.image.url(),
      authorId: authorId?.id,
    };

    articlesPromises.push(
      prisma.article.create({
        data: article,
      })
    );
  }

  await Promise.all(articlesPromises);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
