-- RESET / DROPS

DROP TABLE IF EXISTS property_extras;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS property_types;
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS address_districts;

-- TABLES

CREATE TABLE address_districts (
  id SERIAL,
  name VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id SERIAL,
  district_id INTEGER REFERENCES address_districts(id) NOT NULL,
  
  number INTEGER,
  street VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE property_types (
  id SERIAL,

  type VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE properties (
  id SERIAL,

  type_id INTEGER REFERENCES property_types(id),
  addresses_id INTEGER REFERENCES addresses(id),

  qt_rooms INTEGER,
  qt_suites INTEGER,
  qt_lvrooms INTEGER,
  qt_vacancies INTEGER,
  area FLOAT,
  builtin_cabinet BOOLEAN,
  description TEXT,
  rent FLOAT,

  PRIMARY KEY (id)
);

CREATE TABLE property_extras (
  id SERIAL,
  propety_id INTEGER REFERENCES properties(id) NOT NULL,

  qt_dnrooms INTEGER,
  floor INTEGER,
  condo_value FLOAT,
  lobby_24h BOOLEAN,

  PRIMARY KEY (id)
);

-- INSERTIONS
INSERT INTO address_districts VALUES
  (1, 'Ouro Preto'),
  (2, 'Bandeirantes'),
  (3, 'Santo Antonio'),
  (4, 'Gameleira')
;


INSERT INTO addresses VALUES
  (1, 1, 100, 'Rua Logo Ali'),
  (2, 2, 200, 'Rua Logo Aqui'),
  (3, 3, 300, 'Rua Logo Lá'),
  (4, 4, 500, 'Rua Logo Depois')
;


INSERT INTO property_types VALUES
  (1, 'Casa'),
  (2, 'Apartamento')
;

INSERT INTO properties VALUES
  (1, 1, 1, 3, 2, 2, 2, 11.5, TRUE, 'Uma descricao qualquer 1', 1000.99),
  (2, 1, 2, 3, 2, 2, 2, 12.5, TRUE, 'Uma descricao qualquer 2', 2000.99),
  (3, 2, 3, 3, 2, 2, 2, 13.5, TRUE, 'Uma descricao qualquer 3', 3000.99),
  (4, 2, 4, 3, 2, 2, 2, 14.5, TRUE, 'Uma descricao qualquer 4', 4000.99)
;
