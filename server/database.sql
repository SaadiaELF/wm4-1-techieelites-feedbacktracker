DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS admins;

DROP TABLE IF EXISTS mentors;

DROP TABLE IF EXISTS students;


CREATE TABLE users (
    user_id integer NOT NULL DEFAULT 'nextval('users_user_id_seq'::regclass)',
    full_name character varying(120) COLLATE pg_catalog."default" NOT NULL,
    email character varying(120) COLLATE pg_catalog."default" NOT NULL,
    password character varying(120) COLLATE pg_catalog."default" NOT NULL,
    role character varying(30) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(120) COLLATE pg_catalog."default",
    bio character varying COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)

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