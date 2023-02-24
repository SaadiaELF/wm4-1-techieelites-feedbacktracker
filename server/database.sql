DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS admins;

DROP TABLE IF EXISTS mentors;

DROP TABLE IF EXISTS students;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    password VARCHAR(120) NOT NULL,
    role VARCHAR(30) NOT NULL,
    bio VARCHAR(120),
    img_url VARCHAR(120)
);

CREATE TABLE admins (admin_id INT REFERENCES users(id));

CREATE TABLE mentors (mentor_id INT REFERENCES users(id));

CREATE TABLE students (
    student_id INT REFERENCES users(id) customer_id INT REFERENCES customers(id),
    mentor_id INT REFERENCES mentors(id),
    module VARCHAR(120),
    lesson VARCHAR(120),
    skill VARCHAR(120)
);

INSERT INTO users (full_name, email, password, role, bio, img_url)
VALUES
    ();

INSERT INTO admins(admin_id)
VALUES
    ();

INSERT INTO mentors(mentor_id)
VALUES
    ();

INSERT INTO students(student_id, module, lesson, skill)
VALUES
    ();