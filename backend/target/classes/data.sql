-- Insert sample data into Empresa table
INSERT INTO Empresa (nombre, descripcion) VALUES
    ('Empresa A', 'Descripcion de Empresa A'),
    ('Empresa B', 'Descripcion de Empresa B'),
    ('Empresa C', 'Descripcion de Empresa C');

-- Insert sample data into TipoFuncionario table
INSERT INTO Tipo_Funcionario (tipo) VALUES
    ('Tipo A'),
    ('Tipo B'),
    ('Tipo C');

-- Insert sample data into Funcionario table
INSERT INTO Funcionario (empresa_id, tipo_funcionario_id, nombre, apellido) VALUES
    (1, 1, 'Juan', 'Perez'),
    (1, 2, 'Maria', 'Lopez'),
    (2, 3, 'Carlos', 'Garcia'),
    (3, 1, 'Ana', 'Martinez');

-- Insert sample data into Cliente table
INSERT INTO Cliente (nombre, apellido, direccion, telefono, fecha_nacimiento, ocupacion) VALUES
    ('Cliente 1', 'Apellido 1', 'Direccion 1', '111-111-1111', '1980-01-01', 'Ocupacion 1'),
    ('Cliente 2', 'Apellido 2', 'Direccion 2', '222-222-2222', '1990-02-02', 'Ocupacion 2'),
    ('Cliente 3', 'Apellido 3', 'Direccion 3', '333-333-3333', '2000-03-03', 'Ocupacion 3');

-- Insert sample data into Reporte table
INSERT INTO Reporte (doc_identidad) VALUES
    ('Detalles del reporte 1'),
    ('Detalles del reporte 2'),
    ('Detalles del reporte 3');

-- Insert sample data into Analisis table
INSERT INTO Analisis (monto_admitido, evaluacion_riesgo, factores_riesgo, comentarios) VALUES
    (50000.00, 2, 'Factor 1, Factor 2', 'Comentarios 1'),
    (30000.00, 5, 'Factor 3, Factor 4', 'Comentarios 2'),
    (40000.00, 3, 'Factor 5, Factor 6', 'Comentarios 3');

-- Insert sample data into Credito table
INSERT INTO Credito (empresa_id, cliente_id, reporte_id, analisis_id, razon_credito, monto_solicitado, fecha_inicio, cuotas) VALUES
    (1, 1, 1, 1, 'Razon 1', 50000.00, '2023-01-01', 12),
    (2, 2, 2, 2, 'Razon 2', 30000.00, '2023-02-01', 24),
    (3, 3, 3, 3, 'Razon 3', 40000.00, '2023-03-01', 36);