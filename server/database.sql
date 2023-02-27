
DROP TABLE IF EXISTS module;

DROP TABLE IF EXISTS student_feedback;

DROP TABLE IF EXISTS student_mentor;

DROP TABLE IF EXISTS users;




CREATE TABLE module
(
    module_id integer NOT NULL,
    title character varying COLLATE pg_catalog."default",
    lessons character varying[] COLLATE pg_catalog."default",
    module_url character varying COLLATE pg_catalog."default",
    CONSTRAINT admins_pkey PRIMARY KEY (module_id),
    CONSTRAINT user_id FOREIGN KEY (module_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

CREATE TABLE student_feedback
(
    sfeedback_id integer NOT NULL,
    student_id integer NOT NULL DEFAULT 'nextval('student_feedback_student_id_seq'::regclass)',
    module_id integer NOT NULL DEFAULT 'nextval('student_feedback_module_id_seq'::regclass)',
    module_type mentor_type NOT NULL DEFAULT 'tech'::mentor_type,
    text character varying(255) COLLATE pg_catalog."default",
    date date,
    CONSTRAINT mentors_pkey PRIMARY KEY (sfeedback_id),
    CONSTRAINT module_id FOREIGN KEY (module_id)
        REFERENCES module (module_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)


CREATE TABLE student_mentor
(
    student_id integer NOT NULL DEFAULT 'nextval('students_student_id_seq'::regclass)',
    mentor_id integer DEFAULT 'nextval('students_mentor_id_seq'::regclass)',
    mentor_type mentor_type,
    CONSTRAINT students_pkey PRIMARY KEY (student_id),
    CONSTRAINT mentor_id FOREIGN KEY (mentor_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT user_id FOREIGN KEY (student_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

CREATE TABLE users
(
    user_id integer NOT NULL DEFAULT 'nextval('users_user_id_seq'::regclass)',
    full_name character varying(120) COLLATE pg_catalog."default" NOT NULL,
    email character varying(120) COLLATE pg_catalog."default" NOT NULL,
    password character varying(120) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(120) COLLATE pg_catalog."default",
    bio character varying COLLATE pg_catalog."default",
    role role_type,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)