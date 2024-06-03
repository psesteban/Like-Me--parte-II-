CREATE DATABASE likeme;
\c likeme
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(25) NOT NULL,
    img VARCHAR(1000) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    likes INT NOT NULL
);
