# React Native Drizzle ORM with Expo SQLite

This project demonstrates the integration of [Drizzle ORM](https://orm.drizzle.team/) with [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) in a React Native application. It includes examples of database schema definitions, migrations, and interactions with SQLite.

## Features

- **Drizzle ORM**: A lightweight and type-safe ORM for managing SQLite databases.
- **Expo SQLite**: SQLite integration for React Native using Expo.
- **Database Migrations**: Manage database schema changes with Drizzle's migration tools.

## Get started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npx expo start
   ```

3. Open the app in one of the following environments:

   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## Project Structure

- **`db/schema.ts`**: Defines the database schema, including tables for users, orders, deliveries, and restaurants.
- **`db/dbInstance.ts`**: Handles database initialization and migrations.
- **`app/`**: Contains the main application code, including components and screens.

## Database Schema

The project includes the following tables:

- **Users**: Stores user information (e.g., name, age, email).
- **Orders**: Tracks orders placed by users, including product details and pricing.
- **Deliveries**: Manages delivery information, such as address, status, and delivery date.
- **Restaurants**: Stores restaurant details, including name, address, and contact information.

## Running Migrations

Migrations are handled automatically when the app starts. The `runMigrations` function ensures that the database schema is up-to-date. If the migration table does not exist, it will be created automatically.

## Development Notes

- You can start developing by editing the files inside the **app** directory.
- This project uses [file-based routing](https://docs.expo.dev/router/introduction) for navigation.

## Learn More

To learn more about the tools and libraries used in this project, check out the following resources:

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Expo SQLite Documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [Expo Documentation](https://docs.expo.dev/)

## Join the Community

Join the community of developers working with Expo and Drizzle ORM:

- [Expo on GitHub](https://github.com/expo/expo)
- [Drizzle ORM on GitHub](https://github.com/drizzle-team/drizzle-orm)
- [Expo Discord Community](https://chat.expo.dev)
