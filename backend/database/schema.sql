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
  district_id INTEGER REFERENCES address_districts(id) ON DELETE CASCADE NOT NULL,
  
  number INTEGER,
  street VARCHAR(50),

  PRIMARY KEY (id)
);

CREATE TABLE property_types (
  id SERIAL,

  name VARCHAR(50),

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
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE NOT NULL UNIQUE,

  qt_dnrooms INTEGER,
  floor INTEGER,
  condo_value FLOAT,
  lobby_24h BOOLEAN,

  PRIMARY KEY (id)
);
