CREATE DATABASE amazon_clone;

USE amazon_clone;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    price INT,
    image VARCHAR(255)
);

CREATE TABLE orders(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    total_price INT
);
