-- RESET / DROPS

DROP IF EXISTS address_districts;
DROP IF EXISTS addresses;
DROP IF EXISTS property_types;
DROP IF EXISTS property_extras;
DROP IF EXISTS properties;

-- TABLES

CREATE TABLE address_districts (
  id SERIAL,
  name VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id SERIAL,
  district_id INTEGER,
  
  number INTEGER,
  street VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE property_types (
  id SERIAL,

  type VARCHAR(50),

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

CREATE TABLE properties (
  id SERIAL,

  type_id INTEGER REFERENCES property_types(id),
  addresses_id INTEGER REFERENCES addresses(id),

  qt_rooms INTEGER,
  qt_suites INTEGER,
  qt_lvrooms INTEGER,
  qt_vacancies INTEGER,
  qt_vacancies INTEGER,
  area FLOAT,
  builtin_cabinet BOOLEAN,
  description TEXT,
  rent FLOAT,

  PRIMARY KEY (id),
);

-- INSERTIONS

