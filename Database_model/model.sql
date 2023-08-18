
CREATE TABLE gymnasiuims(
    id INT(10) NOT NULL,
    name VARCHAR2(80) ,
    address VARCHAR2(500),
    tel VARCHAR2(40),
    CONSTRAINT gym_pk PRIMARY KEY (id)
);

CREATE TABLE members(
    id INT(10) NOT NULL,
    id_gym INT(10) NOT NULL,
    last_name VARCHAR2(140),
    first_name VARCHAR2(140),
    address VARCHAR2(500),
    birthday DATE,
    gender VARCHAR2(40),
    CONSTRAINT member_pk PRIMARY KEY (id),
    CONSTRAINT fk_gym FOREIGN KEY (id_gym) REFERENCES gymnasiuims(id)
);

CREATE TABLE sessions(
    id INT(10) NOT NULL,
    id_member INT(10) NOT NULL,
    sport_type VARCHAR2(40),
    schedule DATETIME,
    CONSTRAINT session_pk PRIMARY KEY (id),
    CONSTRAINT fk_member FOREIGN KEY (id_member) REFERENCES members(id)
);

CREATE TABLE coaches(
    id INT(10) NOT NULL,
    id_session INT(10) NOT NULL,
    last_name VARCHAR2(140),
    first_name VARCHAR2(140),
    age NUMBER,
    speciality VARCHAR2(100),
    CONSTRAINT coach_pk PRIMARY KEY (id),
    CONSTRAINT fk_session FOREIGN KEY (id_session) REFERENCES sessions(id)
);