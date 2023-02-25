--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.1

-- Started on 2023-02-25 17:05:20 +01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16475)
-- Name: admins; Type: TABLE; Schema: public; Owner: cyf_7ewl_user
--

CREATE TABLE public.admins (
    admin_id integer NOT NULL
);


ALTER TABLE public.admins OWNER TO cyf_7ewl_user;

--
-- TOC entry 221 (class 1259 OID 16474)
-- Name: admins_admin_id_seq; Type: SEQUENCE; Schema: public; Owner: cyf_7ewl_user
--

CREATE SEQUENCE public.admins_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_admin_id_seq OWNER TO cyf_7ewl_user;

--
-- TOC entry 3177 (class 0 OID 0)
-- Dependencies: 221
-- Name: admins_admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cyf_7ewl_user
--

ALTER SEQUENCE public.admins_admin_id_seq OWNED BY public.admins.admin_id;


--
-- TOC entry 217 (class 1259 OID 16442)
-- Name: mentors; Type: TABLE; Schema: public; Owner: cyf_7ewl_user
--

CREATE TABLE public.mentors (
    mentor_id integer NOT NULL
);


ALTER TABLE public.mentors OWNER TO cyf_7ewl_user;

--
-- TOC entry 216 (class 1259 OID 16441)
-- Name: mentors_mentor_id_seq; Type: SEQUENCE; Schema: public; Owner: cyf_7ewl_user
--

CREATE SEQUENCE public.mentors_mentor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mentors_mentor_id_seq OWNER TO cyf_7ewl_user;

--
-- TOC entry 3178 (class 0 OID 0)
-- Dependencies: 216
-- Name: mentors_mentor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cyf_7ewl_user
--

ALTER SEQUENCE public.mentors_mentor_id_seq OWNED BY public.mentors.mentor_id;


--
-- TOC entry 220 (class 1259 OID 16455)
-- Name: students; Type: TABLE; Schema: public; Owner: cyf_7ewl_user
--

CREATE TABLE public.students (
    student_id integer NOT NULL,
    module character varying(120),
    lesson character varying,
    mentor_id integer,
    skill character varying
);


ALTER TABLE public.students OWNER TO cyf_7ewl_user;

--
-- TOC entry 219 (class 1259 OID 16454)
-- Name: students_mentor_id_seq; Type: SEQUENCE; Schema: public; Owner: cyf_7ewl_user
--

CREATE SEQUENCE public.students_mentor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_mentor_id_seq OWNER TO cyf_7ewl_user;

--
-- TOC entry 3179 (class 0 OID 0)
-- Dependencies: 219
-- Name: students_mentor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cyf_7ewl_user
--

ALTER SEQUENCE public.students_mentor_id_seq OWNED BY public.students.mentor_id;


--
-- TOC entry 218 (class 1259 OID 16453)
-- Name: students_student_id_seq; Type: SEQUENCE; Schema: public; Owner: cyf_7ewl_user
--

CREATE SEQUENCE public.students_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_student_id_seq OWNER TO cyf_7ewl_user;

--
-- TOC entry 3180 (class 0 OID 0)
-- Dependencies: 218
-- Name: students_student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cyf_7ewl_user
--

ALTER SEQUENCE public.students_student_id_seq OWNED BY public.students.student_id;


--
-- TOC entry 215 (class 1259 OID 16433)
-- Name: users; Type: TABLE; Schema: public; Owner: cyf_7ewl_user
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    full_name character varying(120) NOT NULL,
    email character varying(120) NOT NULL,
    password character varying(120) NOT NULL,
    role character varying(30) NOT NULL,
    img_url character varying(120),
    bio character varying
);


ALTER TABLE public.users OWNER TO cyf_7ewl_user;

--
-- TOC entry 214 (class 1259 OID 16432)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: cyf_7ewl_user
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO cyf_7ewl_user;

--
-- TOC entry 3181 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cyf_7ewl_user
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 3008 (class 2604 OID 16478)
-- Name: admins admin_id; Type: DEFAULT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.admins ALTER COLUMN admin_id SET DEFAULT nextval('public.admins_admin_id_seq'::regclass);


--
-- TOC entry 3005 (class 2604 OID 16445)
-- Name: mentors mentor_id; Type: DEFAULT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.mentors ALTER COLUMN mentor_id SET DEFAULT nextval('public.mentors_mentor_id_seq'::regclass);


--
-- TOC entry 3006 (class 2604 OID 16458)
-- Name: students student_id; Type: DEFAULT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_student_id_seq'::regclass);


--
-- TOC entry 3007 (class 2604 OID 16459)
-- Name: students mentor_id; Type: DEFAULT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.students ALTER COLUMN mentor_id SET DEFAULT nextval('public.students_mentor_id_seq'::regclass);


--
-- TOC entry 3004 (class 2604 OID 16436)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 3171 (class 0 OID 16475)
-- Dependencies: 222
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: cyf_7ewl_user
--

COPY public.admins (admin_id) FROM stdin;
111
\.


--
-- TOC entry 3166 (class 0 OID 16442)
-- Dependencies: 217
-- Data for Name: mentors; Type: TABLE DATA; Schema: public; Owner: cyf_7ewl_user
--

COPY public.mentors (mentor_id) FROM stdin;
11
22
88053
\.


--
-- TOC entry 3169 (class 0 OID 16455)
-- Dependencies: 220
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: cyf_7ewl_user
--

COPY public.students (student_id, module, lesson, mentor_id, skill) FROM stdin;
3	\N	\N	11	\N
4	\N	\N	11	\N
1	\N	\N	22	\N
2	\N	\N	11	\N
\.


--
-- TOC entry 3164 (class 0 OID 16433)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: cyf_7ewl_user
--

COPY public.users (user_id, full_name, email, password, role, img_url, bio) FROM stdin;
11	mentor1	mentor1@test.com	12333	mentor		
3	student3	student3@test.com	12333	student	\N	\N
4	student4	student4@test.com	12333	student	\N	\N
111	admin1	admin1@test.com	12333	admin	\N	\N
22	mentor2	mentor2@test.com	12333	mentor	\N	\N
5	student5	student5@test.com	123335	student		
6	student6	student5@test.com	123336	student		
88053	mentor3	mentor3@test.com	123337	mentor		
1	student1	student1@test.com	12333	student		Hello test1
2	student2	studenttest2@test.com	12333	student		 Test-test2
\.


--
-- TOC entry 3182 (class 0 OID 0)
-- Dependencies: 221
-- Name: admins_admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cyf_7ewl_user
--

SELECT pg_catalog.setval('public.admins_admin_id_seq', 1, false);


--
-- TOC entry 3183 (class 0 OID 0)
-- Dependencies: 216
-- Name: mentors_mentor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cyf_7ewl_user
--

SELECT pg_catalog.setval('public.mentors_mentor_id_seq', 1, false);


--
-- TOC entry 3184 (class 0 OID 0)
-- Dependencies: 219
-- Name: students_mentor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cyf_7ewl_user
--

SELECT pg_catalog.setval('public.students_mentor_id_seq', 1, false);


--
-- TOC entry 3185 (class 0 OID 0)
-- Dependencies: 218
-- Name: students_student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cyf_7ewl_user
--

SELECT pg_catalog.setval('public.students_student_id_seq', 1, false);


--
-- TOC entry 3186 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cyf_7ewl_user
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);


--
-- TOC entry 3016 (class 2606 OID 16480)
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (admin_id);


--
-- TOC entry 3012 (class 2606 OID 16447)
-- Name: mentors mentors_pkey; Type: CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (mentor_id);


--
-- TOC entry 3014 (class 2606 OID 16463)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- TOC entry 3010 (class 2606 OID 16438)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3018 (class 2606 OID 16506)
-- Name: students mentor_id; Type: FK CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT mentor_id FOREIGN KEY (mentor_id) REFERENCES public.mentors(mentor_id) ON UPDATE CASCADE NOT VALID;


--
-- TOC entry 3020 (class 2606 OID 16486)
-- Name: admins user_id; Type: FK CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT user_id FOREIGN KEY (admin_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3017 (class 2606 OID 16491)
-- Name: mentors user_id; Type: FK CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT user_id FOREIGN KEY (mentor_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3019 (class 2606 OID 16496)
-- Name: students user_id; Type: FK CONSTRAINT; Schema: public; Owner: cyf_7ewl_user
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT user_id FOREIGN KEY (student_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2023-02-25 17:05:28 +01

--
-- PostgreSQL database dump complete
--

