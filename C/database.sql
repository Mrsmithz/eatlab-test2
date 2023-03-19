CREATE TABLE `Customers` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255),
    email varchar(255),
    `address` TEXT
);

CREATE TABLE `Products` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255),
    `description` varchar(255),
    price float,
    quantity int
);

CREATE TABLE `Categories` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category varchar(255)
);

CREATE TABLE `Reviews` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    review TEXT,
    productId int NOT NULL,
    customerId int NOT NULL,
    FOREIGN KEY(productId) REFERENCES Products(id),
    FOREIGN KEY(customerId) REFERENCES Customers(id)
);

CREATE TABLE `Products_Categories` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoryId int NOT NULL,
    productId int NOT NULL,
    FOREIGN KEY(categoryId) REFERENCES Categories(id),
    FOREIGN KEY(productId) REFERENCES Products(id)
);

CREATE TABLE `Carts` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customerId int NOT NULL,
    FOREIGN KEY(customerId) REFERENCES Customers(id)
);

CREATE TABLE `Products_Carts` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cartId int NOT NULL,
    productId int NOT NULL,
    FOREIGN KEY(productId) REFERENCES Products(id),
    FOREIGN KEY(cartId) REFERENCES Carts(id)
);

CREATE TABLE `Orders` (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customerId int NOT NULL,
    cartId int NOT NULL,
    FOREIGN KEY(customerId) REFERENCES Customers(id),
    FOREIGN KEY(cartId) REFERENCES Carts(id)
);