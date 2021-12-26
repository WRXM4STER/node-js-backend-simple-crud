create TABLE category_type(
    id SERIAL PRIMARY KEY,
    name varchar(255)
)

create TABLE category(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    category_type_id INTEGER,
    FOREIGN KEY (category_type_id) REFERENCES category_type(id)
)