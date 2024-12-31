import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const generateUsers = (count: number) => {
  return Array.from({ length: count }, () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      id: faker.string.ulid(),
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }),
      username: faker.internet.username({ firstName, lastName }),
      avatar: faker.image.avatar(),
      password: faker.internet.password({ length: 6 }),
      creditCards: Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => ({
          cardNumber: faker.finance.creditCardNumber("mastercard"),
          cardType: "Master Card",
          cardHolder: `${firstName} ${lastName}`,
          expiryDate: faker.date.future().toISOString().split("T")[0],
          balance: parseFloat(
            faker.finance.amount({ min: 100, max: 10000, dec: 0 }),
          ),
        }),
      ),
    };
  });
};

const db = {
  users: generateUsers(6),
};

export type JsonDB = typeof db;

const filePath = resolve(__dirname, "db.json");
writeFileSync(filePath, JSON.stringify(db, null, 2));

console.log(`Mock database generated at ${filePath}`);
