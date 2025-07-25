DROP TABLE usuarios_propriedades;
DROP TABLE animais_propriedades;
DROP TABLE animais;
DROP TABLE propriedades;
DROP TABLE usuarios;

CREATE TABLE usuarios(
    usu_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usu_nome VARCHAR(128) NOT NULL,
    usu_email VARCHAR(256) NOT NULL UNIQUE,
    usu_senha VARCHAR(128) NOT NULL,
    usu_telefone VARCHAR(11),
    usu_foto VARCHAR(128),
    usu_timestamp  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    usu_last_login  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    usu_status ENUM("ativo", "desativado") DEFAULT "ativo" NOT NULL
);
CREATE TABLE propriedades(
    pro_id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pro_nome VARCHAR(128) NOT NULL,
    pro_descicao VARCHAR(1000) NOT NULL,
    /* Juntar todo o endereço neste campo */
    pro_endereco VARCHAR(256) NOT NULL,
    pro_oner INT NOT NULL,
    pro_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    pro_status ENUM("ativo", "desativado") DEFAULT "ativo" NOT NULL
);
CREATE TABLE animais(
    ani_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ani_nome VARCHAR(128) NOT NULL,
    ani_especie VARCHAR(128) NOT NULL,
    ani_raca VARCHAR(128) NOT NULL,
    ani_sexo ENUM("macho", "femea") NOT NULL,
    ani_nascimento DATE,
    ani_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    ani_estado ENUM("vivo", "morto") DEFAULT "vivo" NOT NULL,
    ani_status ENUM("ativo", "desativado") DEFAULT "ativo" NOT NULL,
    /* Não obrigatorio */
    ani_pai INT,
    ani_mae INT,
    FOREIGN KEY (ani_pai) REFERENCES animais(ani_id),
    FOREIGN KEY (ani_mae) REFERENCES animais(ani_id)
);

CREATE TABLE usuarios_propriedades(
    uspr_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usu_id INT NOT NULL,
    pro_id INT NOT NULL,
    uspr_permicao ENUM("dono", "total", "cadastro", "leitura") DEFAULT "leitura" NOT NULL,
    uspr_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    uspr_status ENUM("ativo", "desativado") DEFAULT "ativo" NOT NULL,
    FOREIGN KEY (usu_id) REFERENCES usuarios(usu_id),
    FOREIGN KEY (pro_id) REFERENCES propriedades(pro_id)
);

CREATE TABLE animais_propriedades(
    anpr_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pro_id INT NOT NULL,
    ani_id INT NOT NULL,
    anpr_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    anpr_status ENUM("ativo", "desativado") DEFAULT "ativo" NOT NULL,
    FOREIGN KEY (pro_id) REFERENCES propriedades(pro_id),
    FOREIGN KEY (ani_id) REFERENCES animais(ani_id)
);

-- CREATE TABLE eventos(
--     eve_id INT NOT NULL PRIMARY KEY,
--     ani_id INT NOT NULL,
--     usu_id INT NOT NULL,
--     eve_descicao VARCHAR(1000) NOT NULL,
--     eve_data DATE NOT NULL

-- );