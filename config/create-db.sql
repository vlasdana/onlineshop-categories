CREATE DATABASE IF NOT EXISTS webshop;

USE webshop;

-- create table for product categories
CREATE TABLE IF NOT EXISTS product_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    is_active BOOLEAN DEFAULT true NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    priority INT DEFAULT 0
);

-- insert 10 sets of example data for categories, all are active by default
-- rest of the fields are optional, but we will use them in the application
INSERT INTO product_category (name, description, is_active)
VALUES
    ('Electronics', 'Devices and gadgets', true),
    ('Clothing', 'Apparel and fashion', true),
    ('Books', 'Literature and reading materials', true),
    ('Laptops', 'Portable', true),
    ('Smartphones', 'Mobile communication devices', true),
    ('T-shirts', 'Casual wear', true),
    ('Jeans', 'Denim pants', true),
    ('Home Appliances', 'Household electronic devices', true),
    ('Sportswear', 'Clothing for sports activities', true),
    ('Furniture', 'Home and office furniture', true);