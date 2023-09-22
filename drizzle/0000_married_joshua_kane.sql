-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `formdata` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(255) NOT NULL,
	`lastName` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `formdata_id` PRIMARY KEY(`id`),
	CONSTRAINT `email` UNIQUE(`email`)
);

*/