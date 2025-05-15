CREATE TABLE `deliveries_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`orderId` integer NOT NULL,
	`address` text NOT NULL,
	`status` text NOT NULL,
	`deliveryDate` integer NOT NULL,
	`createdAt` integer NOT NULL
);
