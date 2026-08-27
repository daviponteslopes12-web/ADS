CREATE DATABASE IF NOT EXISTS padaria;
USE padaria;

CREATE TABLE IF NOT EXISTS clientes (
    id int auto_increment primary key,
    nome varchar(255) not null,
    telefone varchar(255) not null
);

CREATE TABLE IF NOT EXISTS produtos (
    id int auto_increment primary key,
    nome varchar(255) not null,
    preco decimal(10,2) not null,
    estoque int not null DEFAULT 0
);

CREATE TABLE IF NOT EXISTS categorias (
    id int auto_increment primary key,
    nome varchar(255) not null
);

CREATE TABLE IF NOT EXISTS vendas (
    id int auto_increment primary key,
    cliente_id int not null,
    data_venda timestamp DEFAULT current_timestamp,
    valor_total decimal(10,2) not null,
    CONSTRAINT fk_vendas_clientes
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS itens_venda (
    id int auto_increment primary key,
    venda_id int not null,
    produto_id int not null,
    quantidade int DEFAULT 0,
    preco_unitario decimal(10,2) not null,
    CONSTRAINT fk_itens_venda_venda
    FOREIGN KEY (venda_id) REFERENCES vendas(id),
    CONSTRAINT fk_itens_venda_produto
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE IF NOT EXISTS funcionarios (
    id int auto_increment primary key,
    nome varchar(255) not null,
    cargo varchar(255) not null
);

CREATE TABLE IF NOT EXISTS fornecedores (
    id int auto_increment primary key,
    nome varchar(255) not null,
    telefone varchar(255) not null
);

CREATE TABLE IF NOT EXISTS ingredientes (
    id int auto_increment primary key,
    nome varchar(255) not null,
    estoque int not null
);

CREATE TABLE IF NOT EXISTS receitas (
    id int auto_increment primary key,
    produto_id int not null,
    ingrediente_id int not null,
    quantidade int not null,
    CONSTRAINT fk_receitas_produtos
    FOREIGN KEY (produto_id) REFERENCES produtos(id),
    CONSTRAINT fk_receitas_ingrediente
    FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(id)
);