CREATE TABLE IF NOT EXISTS Empresa (
    id INT NOT NULL,
    nombre VARCHAR(250) NOT NULL,
    descripcion VARCHAR(250),
    PRIMARY KEY(id)
);

CREATE TABLE TipoFuncionario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Funcionario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    empresa_id BIGINT NOT NULL,
    tipo_funcionario_id BIGINT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    CONSTRAINT fk_funcionario_empresa FOREIGN KEY (empresa_id) REFERENCES Empresa(id),
    CONSTRAINT fk_funcionario_tipo_funcionario FOREIGN KEY (tipo_funcionario_id) REFERENCES TipoFuncionario(id)
);