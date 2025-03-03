import { db } from "./index";
import { migrate } from "drizzle-orm/bun-sql/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "src/db/migrations",
      // Define a simple migration strategy that doesn't use transactions
      migrationStrategy: {
        beforeMigration: async () => {}, // No-op
        afterMigration: async () => {}, // No-op
        beforeAllMigrations: async () => {}, // No-op
        afterAllMigrations: async () => {} // No-op
      }
    });
    console.log("Migration Completed");
  } catch (error) {
    console.error("error in migrating ", error.message);
    process.exit(1);
  }
};

main();