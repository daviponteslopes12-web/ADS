CREATE DATABASE IF NOT EXISTS locadora_veloz;
USE locadora_veloz;

-- Configurando caracteres para padrão BR
CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    cidade VARCHAR(80),
    categoria ENUM("PF", "PJ") DEFAULT "PF"
);

CREATE TABLE IF NOT EXISTS veiculo (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    placa CHAR(7) NOT NULL,
    modelo VARCHAR(80) NOT NULL,
    categoria ENUM("SEDAN", "SUV", "HATCH", "PICKUP"),
    cor VARCHAR(40),
    valor_diario DECIMAL(8, 2) NOT NULL,
);

CREATE TABLE IF NOT EXISTS cliente_telefone (
    id_telefone INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    telefone VARCHAR(20),
    CONSTRAINT fk_telefone_cliente
    FOREIGN KEY (id_cliente)
    REFERENCES cliente(id_cliente) ON DELETE RESTRICT
);

-- Insert
INSERT INTO cliente (nome, cpf, categoria) 
VALUES ('Ana Lima', '11111111111', 'Indaiatuba', 'PJ');

-- Drop no banco
DROP DATABASE IF NOT EXISTS locadora_veloz;

