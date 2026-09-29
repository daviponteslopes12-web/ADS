-- 1
CREATE TABLE IF NOT EXISTS produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT
);

-- 2
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    ativo CHAR(1) NOT NULL DEFAULT 1
);

-- 3
CREATE TABLE IF NOT EXISTS funcionarios (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    ativo INT NOT NULL DEFAULT 1,
    data_cadastro DATETIME NOT NULL
);

-- 4
ALTER TABLE funcionarios 
ADD cpf VARCHAR(11) NOT NULL UNIQUE;

-- 5
ALTER TABLE funcionarios
ADD cargo VARCHAR(80) NOT NULL;

-- 6
ALTER TABLE funcionarios
MODIFY cargo VARCHAR(150) NOT NULL;

-- 7
ALTER TABLE funcionarios
DROP COLUMN cargo;

-- 8 COLUMN é opcional
ALTER TABLE funcionarios
ADD COLUMN departamento VARCHAR(100) NOT NULL;

-- 9
ALTER TABLE funcionarios
MODIFY COLUMN departamento VARCHAR(150) NOT NULL;

-- 10
ALTER TABLE funcionarios
DROP COLUMN departamento;

-- 11
ALTER TABLE funcionarios
ADD COLUMN matricula INT NOT NULL UNIQUE DEFAULT 0;