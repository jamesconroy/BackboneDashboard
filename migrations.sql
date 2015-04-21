psql
CREATE DATABASE infocards;
\c infocards;

CREATE TABLE cards(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  message VARCHAR(255)
);
