CREATE TABLE users(
    id int NOT NULL PRIMARY KEY,
    username varchar(15) NOT NULL UNIQUE,
    email varchar(40) NOT NULL UNIQUE,
    first_name varchar(15) NOT NULL,
    last_name varchar(30) NOT NULL);
INSERT INTO users(id, username, email, first_name, last_name)
VALUES(5, 'dianaaa_r', 'imaginary_email', 'Diana', 'Romaniuk' )
RETURNING *
