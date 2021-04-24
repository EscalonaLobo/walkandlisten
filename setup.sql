DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first VARCHAR(255) NOT NULL,
    last VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profilepic VARCHAR(255), 
    bio VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE code (
    id SERIAL PRIMARY KEY,
    email VARCHAR REFERENCES users(email),
    code VARCHAR(8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE url (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE friendships( 
  id SERIAL PRIMARY KEY, 
  sender_id INT REFERENCES users(id) NOT NULL, 
  recipient_id INT REFERENCES users(id) NOT NULL, 
  accepted BOOLEAN DEFAULT false);

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(id) NOT NULL,
    recipient_id INT REFERENCES users(id),
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);