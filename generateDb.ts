import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Generate mock users
const generateUsers = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.ulid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    creditCards: Array.from(
      { length: faker.number.int({ min: 1, max: 3 }) },
      () => ({
        cardNumber: faker.finance.creditCardNumber(),
        cardType: "Master Card",
        expiryDate: faker.date.future().toISOString().split("T")[0],
        balance: parseFloat(
          faker.finance.amount({ min: 100, max: 10000, dec: 2 }),
        ),
      }),
    ),
  }));
};

// Generate the mock database
const db = {
  users: generateUsers(6),
};

// Write the data to `public/db.json`
const filePath = resolve(__dirname, "public", "db.json");
writeFileSync(filePath, JSON.stringify(db, null, 2));

console.log(`Mock database generated at ${filePath}`);
