DDROP TABLE IF EXISTS module;



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