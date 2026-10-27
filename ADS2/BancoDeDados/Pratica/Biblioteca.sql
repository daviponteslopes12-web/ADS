CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

DEFAULT CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS livro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano_publicacao DATE NOT NULL,
    genero ENUM('aventura', 'misterio', 'ficcao') NOT NULL DEFAULT 'aventura',
    quantidade INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    bibliotecario_id INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    bairro VARCHAR(255),
    numero VARCHAR(10),
    CONSTRAINT fk_endereco_cliente
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

CREATE TABLE IF NOT EXISTS emprestimo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    livro_id INT NOT NULL,
    bibliotecario_id INT NOT NULL,
    data_emprestimo DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_devolucao_prevista DATE,
    data_devolucao_real DATE,
    CONSTRAINT fk_emprestimo_cliente
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    CONSTRAINT fk_emprestimo_livro
    FOREIGN KEY (livro_id) REFERENCES livro(id),
    CONSTRAINT fk_emprestimo_bibliotecario
    FOREIGN KEY (bibliotecario_id) REFERENCES bibliotecario(id)
);

CREATE TABLE IF NOT EXISTS bibliotecario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,    
    CONSTRAINT fk_bibliotecario_endereco
    FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);