DROP DATABASE IF EXISTS sportspicks;

CREATE DATABASE sportspicks;

USE sportspicks;

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(15) DEFAULT NULL,
  last_name VARCHAR(15) DEFAULT NULL,
  username VARCHAR(15) DEFAULT NULL,
  hash_pw VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS records;
		
CREATE TABLE records (
  id INT NOT NULL AUTO_INCREMENT,
  wins INT DEFAULT NULL,
  losses INT DEFAULT NULL,
  ties INT DEFAULT NULL,
  user_id INT DEFAULT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE records ADD FOREIGN KEY (user_id) REFERENCES users (id);
