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
    student_id integer NOT NULL DEFAULT 'nextval('students_student_id_seq'::regclass)',
    module character varying(120) COLLATE pg_catalog."default",
    lesson character varying COLLATE pg_catalog."default",
    mentor_id integer DEFAULT 'nextval('students_mentor_id_seq'::regclass)',
    skill character varying COLLATE pg_catalog."default",
    CONSTRAINT students_pkey PRIMARY KEY (student_id),
    CONSTRAINT mentor_id FOREIGN KEY (mentor_id)
        REFERENCES public.mentors (mentor_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT user_id FOREIGN KEY (student_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

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