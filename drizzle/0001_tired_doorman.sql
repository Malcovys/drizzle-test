CREATE TABLE `orders_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer NOT NULL,
	`product` text NOT NULL,
	`quantity` integer NOT NULL,
	`price` real NOT NULL,
	`total` real NOT NULL,
	`createdAt` integer NOT NULL
);
