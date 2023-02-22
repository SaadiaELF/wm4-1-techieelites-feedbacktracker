DROP TABLE IF EXISTS admin;

CREATE TABLE admin
(
    admin_id integer NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(30) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT 'admin'::character varying,
    bio character varying(200) COLLATE pg_catalog."default",
    img_url character varying(100) COLLATE pg_catalog."default",
    full_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT admin_pkey PRIMARY KEY (admin_id)
);




DROP TABLE IF EXISTS mentors;

CREATE TABLE mentors
(
    mentor_id integer NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(30) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT 'mentor'::character varying,
    bio character varying(200) COLLATE pg_catalog."default",
    img_url character varying(100) COLLATE pg_catalog."default",
    full_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT mentor_pkey PRIMARY KEY (mentor_id)
);




DROP TABLE IF EXISTS students;

CREATE TABLE students
(
    student_id integer NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(30) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT 'student'::character varying,
    module character varying(30) COLLATE pg_catalog."default",
    lesson character varying(50) COLLATE pg_catalog."default",
    skill character varying(30) COLLATE pg_catalog."default",
    bio character varying(200) COLLATE pg_catalog."default",
    img_url character varying(100) COLLATE pg_catalog."default",
    mentor_id integer,
    full_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT student_pkey PRIMARY KEY (student_id),
    CONSTRAINT mentor FOREIGN KEY (mentor_id)
        REFERENCES public.mentors (mentor_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);




DROP TABLE IF EXISTS "user";

CREATE TABLE "user"
(
    id integer NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(50) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);