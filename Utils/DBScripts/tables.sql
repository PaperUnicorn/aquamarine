CREATE TABLE public.user_data
(
    first_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(255) COLLATE pg_catalog."default",
    user_name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    is_active boolean,
    created_on timestamp with time zone,
    last_updated_on timestamp with time zone,
    CONSTRAINT user_data_pkey PRIMARY KEY (email)
)

TABLESPACE pg_default;

ALTER TABLE public.user_data
    OWNER to postgres;

-- Table: public.task

-- DROP TABLE public.task;

CREATE TABLE public.task
(
    id integer NOT NULL DEFAULT nextval('task_id_seq'::regclass),
    list_id integer NOT NULL DEFAULT nextval('task_list_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    created_on timestamp with time zone,
    is_active boolean,
    "order" integer,
    CONSTRAINT task_pkey PRIMARY KEY (id),
    CONSTRAINT fk_list_id FOREIGN KEY (list_id)
        REFERENCES public.list (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.task
    OWNER to postgres;

-- Table: public.project

-- DROP TABLE public.project;

CREATE TABLE public.project
(
    id integer NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    created_by character varying COLLATE pg_catalog."default",
    created_on timestamp without time zone,
    is_active boolean,
    CONSTRAINT project_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.project
    OWNER to postgres;

-- Table: public.list

-- DROP TABLE public.list;

CREATE TABLE public.list
(
    id integer NOT NULL DEFAULT nextval('list_id_seq'::regclass),
    board_id integer NOT NULL DEFAULT nextval('list_board_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    created_by character varying(255) COLLATE pg_catalog."default",
    created_on timestamp with time zone,
    is_active boolean,
    order_no integer,
    CONSTRAINT list_pkey PRIMARY KEY (id),
    CONSTRAINT fk_board_id FOREIGN KEY (board_id)
        REFERENCES public.board (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.list
    OWNER to postgres;

-- Table: public.board

-- DROP TABLE public.board;

CREATE TABLE public.board
(
    id integer NOT NULL DEFAULT nextval('board_id_seq'::regclass),
    project_id bigint NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    created_by character varying(255) COLLATE pg_catalog."default",
    created_on timestamp with time zone,
    is_active boolean,
    CONSTRAINT board_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.board
    OWNER to postgres;