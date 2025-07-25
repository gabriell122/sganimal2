/*
    USUARIOS
*/
INSERT INTO 
    usuarios 
        ( usu_nome, usu_email, usu_senha, usu_telefone, usu_foto )
VALUES
    ( "José Almeida", "jose@email.com", "1234", "99999999999", ""),
    ( "Felipe Junior", "felipe@email.com", "1234", "88888888888", "hioundasdas3jnfv" ),
    ( "Castor Filho", "castor@email.com", "1234", "", ""),
    ( "Ana Beatriz", "ana@email.com", "1234", "91919191919", "" ),
    ( "Lucas Martins", "lucas@email.com", "1234", "", "" ),
    ( "Clara Souza", "clara@email.com", "1234", "98123456789", "asuidjasd823jn"),
    ( "Rafael Lima", "rafael@email.com", "1234", "", "" ),
    ( "Mariana Rocha", "mariana@email.com", "1234", "99912345678", "" ),
    ( "Thiago Costa", "thiago@email.com", "1234", "91234567890", "foto345abc" ),
    ( "Larissa Melo", "larissa@email.com", "1234", "", "" ),
    ( "Bruno Henrique", "bruno@email.com", "1234", "", "brunofoto124" ),
    ( "Isabela Nunes", "isabela@email.com", "1234", "99887766554", "" ),
    ( "André Souza", "andre@email.com", "1234", "", "" ),
    ( "Fernanda Dias", "fernanda@email.com", "1234", "91122334455", "imgfd789" ),
    ( "Eduardo Moreira", "eduardo@email.com", "1234", "", "" ),
    ( "Patrícia Gomes", "patricia@email.com", "1234", "90099887766", "" ),
    ( "Vinícius Ferreira", "vinicius@email.com", "1234", "", "foto9981" ),
    ( "Juliana Cardoso", "juliana@email.com", "1234", "", "" ),
    ( "Gabriel Silva", "gabriel@email.com", "1234", "93322110099", "" ),
    ( "Amanda Fernandes", "amanda@email.com", "1234", "95566778899", "fotoamanda321" );


/*
    PROPRIEDADES
*/
INSERT INTO 
    propriedades 
        (pro_nome, pro_descicao, pro_endereco, pro_oner) 
VALUES
    ("Sítio Estrela", "Uma bela propriedade rural com lago natural", "Estrada do Lago, KM 5", 1),
    ("Chácara do Sol", "Espaço amplo com pomar e galinheiro", "Rua da Chácara, 321", 1),

    ("Fazenda Boa Vista", "Fazenda de criação de gado leiteiro", "Rodovia BR-010, KM 28", 2),
    ("Sítio Palmeiras", "Sítio com cultivo de hortaliças", "Linha Verde, Zona Rural", 2),
    ("Rancho do Vale", "Rancho simples para final de semana", "Rua do Campo, 112", 2),

    ("Chácara Paraíso", "Ideal para descanso e lazer", "Rua das Palmeiras, 77", 3),

    ("Fazenda Santa Fé", "Grande área com plantação de soja", "Rodovia dos Grãos, KM 12", 4),
    ("Sítio do Moreno", "Casa pequena com nascente natural", "Rua Nova Esperança, 40", 4),

    ("Refúgio Verde", "Sítio com trilhas e mata nativa", "Estrada da Serra, 199", 5),
    ("Estância Bela Vista", "Propriedade voltada para ecoturismo", "Rodovia do Sol, KM 88", 5),
    ("Chácara da Vovó", "Pequena chácara familiar", "Travessa do Sossego, 55", 5),

    ("Rancho Sossego", "Local calmo ideal para descanso", "Rua Rio Claro, 77", 6),

    ("Sítio Aurora", "Área de fruticultura orgânica", "Rodovia Norte, KM 3", 7),
    ("Fazenda Monte Azul", "Fazenda com criação de cavalos", "Fazenda 78, km 45", 7),

    ("Chácara Boa Luz", "Área com lago artificial", "Alameda das Árvores, 12", 8),
    ("Chácara Boa Luz II", "Continuação da chácara ao lado", "Alameda das Árvores, 13", 8),

    ("Sítio Raiz", "Produção de raízes e tubérculos", "Travessa das Mandioquinhas, 66", 9),

    ("Rancho Horizonte", "Ideal para eventos e festas", "Rua das Festas, 200", 10),

    ("Fazenda Nova Vida", "Área extensa e produtiva", "Rodovia da Produção, KM 99", 11),
    ("Chácara Pé de Serra", "Com vista para a serra", "Caminho da Serra, 301", 11),
    ("Sítio Esperança", "Propriedade com casa de campo", "Rua do Sossego, 14", 11),

    ("Sítio das Flores", "Cultivo de flores ornamentais", "Jardim Florido, 500", 12),

    ("Estância do Norte", "Com curral e cocheiras", "Rodovia Norte, KM 21", 13),
    ("Estância do Sul", "Área plana para plantio", "Rodovia Sul, KM 21", 13),

    ("Rancho da Amizade", "Espaço para finais de semana", "Rua da Alegria, 70", 14),
    ("Sítio da Colina", "No alto da colina, com bela vista", "Alto Alegre, 900", 14),

    ("Chácara Horizonte", "Ambiente familiar", "Rua das Nuvens, 77", 15),
    ("Chácara Horizonte II", "Chácara anexa com galpão", "Rua das Nuvens, 78", 15),
    ("Chácara Horizonte III", "Área de expansão da anterior", "Rua das Nuvens, 79", 15),
    ("Sítio Horizonte Final", "Encerrando o complexo", "Rua das Nuvens, 80", 15);


/*
    USUARIOS_PROPRIEDADES
*/
INSERT INTO 
    usuarios_propriedades 
        (usu_id, pro_id, uspr_permicao) 
VALUES
    (1, 1, "dono"),
    (1, 2, "dono"),

    (2, 3, "dono"),
    (2, 4, "dono"),
    (2, 5, "dono"),

    (3, 6, "dono"),

    (4, 7, "dono"),
    (4, 8, "dono"),

    (5, 9, "dono"),
    (5, 10, "dono"),
    (5, 11, "dono"),

    (6, 12, "dono"),

    (7, 13, "dono"),
    (7, 14, "dono"),

    (8, 15, "dono"),
    (8, 16, "dono"),

    (9, 17, "dono"),

    (10, 18, "dono"),

    (11, 19, "dono"),
    (11, 20, "dono"),
    (11, 21, "dono"),

    (12, 22, "dono"),

    (13, 23, "dono"),
    (13, 24, "dono"),

    (14, 25, "dono"),
    (14, 26, "dono"),

    (15, 27, "dono"),
    (15, 28, "dono"),
    (15, 29, "dono"),
    (15, 30, "dono"),
    (16, 1, "total"),
    (17, 1, "cadastro"),
    (18, 1, "leitura"),
    (19, 1, "cadastro"),
    (20, 1, "leitura");

/*
    ANIMAIS
*/
INSERT INTO 
    animais 
        (ani_nome, ani_especie, ani_raca, ani_sexo, ani_nascimento, ani_estado, ani_pai , ani_mae)
VALUES
    ("Max_1", "equino", "Quarto de Milha", "femea", "2017-06-25", "vivo", NULL, NULL),
    ("Amora_2", "equino", "Quarto de Milha", "femea", "2018-08-20", "vivo", NULL, NULL),
    ("Duque_3", "bovino", "Angus", "femea", "2018-02-12", "vivo", NULL, NULL),
    ("Lilica_4", "bovino", "Gir", "femea", "2014-05-10", "vivo", NULL, NULL),
    ("Nina_5", "suíno", "Large White", "femea", "2014-01-08", "morto", NULL, NULL),
    ("Mia_6", "caprino", "Boer", "femea", "2018-04-28", "vivo", NULL, NULL),
    ("Bento_7", "caprino", "Boer", "femea", "2017-10-06", "morto", NULL, NULL),
    ("Lilica_8", "caprino", "Boer", "macho", "2016-11-20", "vivo", NULL, NULL),
    ("Lola_9", "caprino", "Boer", "macho", "2024-07-30", "vivo", NULL, NULL),
    ("Jade_10", "bovino", "Angus", "macho", "2013-06-27", "vivo", NULL, NULL),
    ("Charlie_11", "suíno", "Landrace", "macho", "2018-11-01", "vivo", NULL, NULL),
    ("Charlie_12", "ovino", "Dorper", "femea", "2021-09-24", "vivo", NULL, NULL),
    ("Lilica_13", "bovino", "Gir", "macho", "2020-07-17", "vivo", NULL, NULL),
    ("Nina_14", "suíno", "Landrace", "macho", "2024-03-29", "morto", NULL, NULL),
    ("Bob_15", "ovino", "Dorper", "macho", "2017-10-14", "vivo", NULL, NULL),
    ("Lilica_16", "caprino", "Anglonubiana", "macho", "2021-01-02", "morto", NULL, NULL),
    ("Mel_17", "equino", "Mangalarga", "femea", "2024-01-06", "morto", NULL, NULL),
    ("Spike_18", "caprino", "Anglonubiana", "femea", "2020-03-17", "vivo", NULL, NULL),
    ("Bento_19", "bovino", "Gir", "femea", "2015-04-17", "vivo", NULL, NULL),
    ("Max_20", "caprino", "Anglonubiana", "macho", "2025-03-22", "morto", NULL, NULL),
    ("Toby_21", "suíno", "Large White", "femea", "2023-12-19", "morto", 12, 14),
    ("Lola_22", "equino", "Quarto de Milha", "macho", "2016-07-22", "morto", NULL, NULL),
    ("Lola_23", "ovino", "Santa Inês", "femea", "2020-08-09", "vivo", 6, NULL),
    ("Bento_24", "ovino", "Santa Inês", "macho", "2016-03-09", "vivo", NULL, NULL),
    ("Max_25", "equino", "Quarto de Milha", "macho", "2023-01-13", "morto", 2, 19),
    ("Thor_26", "caprino", "Boer", "femea", "2013-02-22", "vivo", 16, NULL),
    ("Nina_27", "suíno", "Large White", "femea", "2021-08-07", "morto", 20, 12),
    ("Mel_28", "equino", "Mangalarga", "femea", "2018-03-12", "morto", NULL, NULL),
    ("Nick_29", "equino", "Mangalarga", "macho", "2017-02-04", "vivo", 4, 2),
    ("Lilica_30", "ovino", "Santa Inês", "femea", "2011-12-01", "morto", NULL, 4),
    ("Duque_31", "caprino", "Anglonubiana", "femea", "2012-12-12", "morto", NULL, 15),
    ("Luna_32", "ovino", "Santa Inês", "femea", "2015-02-19", "vivo", 19, NULL),
    ("Fred_33", "ovino", "Dorper", "macho", "2019-04-03", "vivo", NULL, 17),
    ("Max_34", "caprino", "Anglonubiana", "femea", "2012-09-22", "morto", 5, NULL),
    ("Lola_35", "ovino", "Dorper", "femea", "2019-04-10", "vivo", 6, 14),
    ("Mia_36", "equino", "Mangalarga", "macho", "2020-10-28", "vivo", NULL, 20),
    ("Amora_37", "ovino", "Santa Inês", "femea", "2020-11-28", "vivo", NULL, NULL),
    ("Luna_38", "ovino", "Dorper", "macho", "2013-05-01", "vivo", 3, NULL),
    ("Lilica_39", "ovino", "Dorper", "femea", "2020-08-27", "vivo", 13, 19),
    ("Toby_40", "ovino", "Dorper", "femea", "2021-05-07", "morto", 4, NULL),
    ("Max_41", "caprino", "Boer", "femea", "2024-02-10", "vivo", NULL, NULL),
    ("Max_42", "equino", "Quarto de Milha", "femea", "2019-03-24", "morto", 12, NULL),
    ("Toby_43", "caprino", "Boer", "macho", "2023-08-18", "vivo", NULL, NULL),
    ("Toby_44", "caprino", "Anglonubiana", "femea", "2013-11-24", "vivo", NULL, NULL),
    ("Bob_45", "ovino", "Santa Inês", "femea", "2018-12-03", "morto", NULL, NULL),
    ("Nina_46", "caprino", "Anglonubiana", "macho", "2012-07-26", "vivo", 13, 9),
    ("Nick_47", "suíno", "Landrace", "femea", "2023-10-10", "vivo", 4, 5),
    ("Duque_48", "bovino", "Gir", "femea", "2025-02-04", "morto", 8, NULL),
    ("Thor_49", "ovino", "Santa Inês", "macho", "2012-05-11", "morto", NULL, NULL),
    ("Mel_50", "caprino", "Anglonubiana", "macho", "2013-06-09", "vivo", NULL, NULL);



INSERT INTO 
    animais_propriedades 
        (pro_id, ani_id, anpr_status)
VALUES
    (1, 1, "desativado"),
    (2, 1, "desativado"),
    (3, 1, "desativado"),
    (4, 1, "desativado"),
    (5, 1, "desativado"),
    (6, 1, "desativado"),
    (7, 1, "desativado"),
    (8, 1, "desativado"),
    (9, 1, "desativado"),
    (10, 1, "ativo"),

    (19, 2, "ativo"),
    (25, 3, "ativo"),
    (15, 4, "ativo"),
    (11, 5, "ativo"),
    (10, 6, "ativo"),
    (29, 7, "ativo"),
    (4, 8, "ativo"),
    (22, 9, "ativo"),
    (6, 10, "ativo"),
    (7, 11, "ativo"),
    (17, 12, "ativo"),
    (24, 13, "ativo"),
    (17, 14, "ativo"),
    (19, 15, "ativo"),
    (18, 16, "ativo"),
    (1, 17, "ativo"),
    (3, 18, "ativo"),
    (9, 19, "ativo"),
    (25, 20, "ativo"),
    (23, 21, "ativo"),
    (9, 22, "ativo"),
    (9, 23, "ativo"),
    (13, 24, "ativo"),
    (4, 25, "ativo"),
    (24, 26, "ativo"),
    (10, 27, "ativo"),
    (19, 28, "ativo"),
    (14, 29, "ativo"),
    (9, 30, "ativo"),
    (17, 31, "ativo"),
    (21, 32, "ativo"),
    (16, 33, "ativo"),
    (25, 34, "ativo"),
    (6, 35, "ativo"),
    (21, 36, "ativo"),
    (25, 37, "ativo"),
    (25, 38, "ativo"),
    (14, 39, "ativo"),
    (29, 40, "ativo"),
    (18, 41, "ativo"),
    (3, 42, "ativo"),
    (18, 43, "ativo"),
    (23, 44, "ativo"),
    (28, 45, "ativo"),
    (23, 46, "ativo"),
    (12, 47, "ativo"),
    (15, 48, "ativo"),
    (7, 49, "ativo"),
    (9, 50, "ativo");


