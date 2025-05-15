import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const ordersTable = sqliteTable("orders_table", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull(), // Référence à l'utilisateur (clé étrangère potentielle)
  product: text().notNull(), // Nom ou description du produit
  quantity: int().notNull(), // Quantité commandée
  price: real().notNull(), // Prix unitaire
  total: real().notNull(), // Prix total (calculé ou stocké)
  createdAt: int().notNull(), // Timestamp de création
});

export const deliveriesTable = sqliteTable("deliveries_table", {
  id: int().primaryKey({ autoIncrement: true }), // Identifiant unique pour chaque livraison
  orderId: int().notNull(), // Référence à la commande (clé étrangère potentielle vers ordersTable)
  address: text().notNull(), // Adresse de livraison
  status: text().notNull(), // Statut de la livraison (ex: "en cours", "livré", "annulé")
  deliveryDate: int().notNull(), // Date de livraison prévue (timestamp)
  createdAt: int().notNull(), // Timestamp de création de l'enregistrement
});

export const restaurantsTable = sqliteTable("restaurants_table", {
  id: int().primaryKey({ autoIncrement: true }), // Identifiant unique pour chaque restaurant
  name: text().notNull(), // Nom du restaurant
  address: text().notNull(), // Adresse du restaurant
  phone: text().notNull(), // Numéro de téléphone
  email: text().notNull().unique(), // Email du restaurant
  createdAt: int().notNull(), // Timestamp de création de l'enregistrement
});