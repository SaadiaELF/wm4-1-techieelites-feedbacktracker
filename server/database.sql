DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS student_mentor;

DROP TABLE IF EXISTS student_feedback;

DROP TABLE IF EXISTS modules;

DROP TABLE IF EXISTS mentor_feedback;


CREATE TABLE users
(
    user_id integer NOT NULL DEFAULT 'nextval('users_user_id_seq'::regclass)',
    full_name character varying(120) COLLATE pg_catalog."default" NOT NULL,
    email character varying(120) COLLATE pg_catalog."default" NOT NULL,
    password character varying(120) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(120) COLLATE pg_catalog."default" DEFAULT 'https://cdn-icons-png.flaticon.com/512/149/149071.png'::character varying,
    bio character varying COLLATE pg_catalog."default",
    role role_type,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
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

CREATE TABLE IF NOT EXISTS student_feedback
(
    sfeedback_id integer NOT NULL,
    student_id integer NOT NULL DEFAULT 'nextval('student_feedback_student_id_seq'::regclass)',
    module_id integer NOT NULL DEFAULT 'nextval('student_feedback_module_id_seq'::regclass)',
    module_type mentor_type NOT NULL DEFAULT 'tech'::mentor_type,
    text character varying(255) COLLATE pg_catalog."default",
    date timestamp without time zone,
    CONSTRAINT mentors_pkey PRIMARY KEY (sfeedback_id),
    CONSTRAINT module_id FOREIGN KEY (module_id)
        REFERENCES modules (module_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

CREATE TABLE modules
(
    module_id integer NOT NULL,
    title character varying COLLATE pg_catalog."default",
    lessons character varying[] COLLATE pg_catalog."default",
    module_url character varying COLLATE pg_catalog."default",
    CONSTRAINT admins_pkey PRIMARY KEY (module_id)
)

CREATE TABLE mentor_feedback
(
    mfeedback_id integer NOT NULL DEFAULT 'nextval('mentor_feedback_mfeedback_id_seq'::regclass)',
    student_id integer NOT NULL DEFAULT 'nextval('mentor_feedback_student_id_seq'::regclass)',
    mentor_id integer NOT NULL DEFAULT 'nextval('mentor_feedback_mentor_id_seq'::regclass)',
    module_id integer NOT NULL DEFAULT 'nextval('mentor_feedback_module_id_seq'::regclass)',
    text character varying COLLATE pg_catalog."default",
    date timestamp without time zone,
    CONSTRAINT mentor_feedback_pkey PRIMARY KEY (mfeedback_id),
    CONSTRAINT mentor_id FOREIGN KEY (mentor_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT module_id FOREIGN KEY (module_id)
        REFERENCES modules (module_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)


INSERT INTO users (user_id, full_name, email, password, img_url, bio, role)
VALUES
    ();

INSERT INTO student_mentor(student_id, mentor_id, mentor_type)
VALUES
    ();

INSERT INTO student_feedback(sfeedback_id, student_id, module_id, module_type, text, date)
VALUES
    ();

INSERT INTO modules(module_id, title, lessons, module_url)
VALUES
    ();
    
INSERT INTO mentor_feedback(mfeedback_id, student_id, mentor_id, module_id, test, date)
VALUES
    ();
