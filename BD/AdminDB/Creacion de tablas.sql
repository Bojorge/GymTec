-- creacion de tablas con su llave primaria -------------------------------------------------------

create table TIPO_EQUIPO (
	codigo int primary key,
	nombre varchar (20) 
);

create table MAQUINA (
	serie int primary key,
	descripcion varchar (20),
	marca varchar (20),
	costo int,
	sucursal varchar (20),
	tipo int
);

create table SUCURSAL (
	nombre varchar (20) primary key,
	provincia varchar (20),
	canton varchar (20),
	distrito varchar (20),
	fecha_apertura date,
	capacidad int,
	horario varchar (50),
	administrador int
);

create table TELEFONO (
	sucursal varchar (20),
	telefono int
);

create table COLABORADOR (
	cedula int primary key,
	correo varchar (50),
	contrasena varchar (20),
	nombre varchar (20),
	apellido1 varchar (20),
	apellido2 varchar (20),
	provincia varchar (20),
	canton varchar (20),
	distrito varchar (20),
	rol int,
	sucursal varchar (20)

);

create table ROL (
	codigo int primary key,
	descripcion varchar (50),
	tipo_planilla int
);

create table TIPO_PLANILLA (
	codigo int primary key,
	descripcion varchar (50),
	pago_clase int,
	pago_hora int,
	pago_mes int
);


create table CLASE (
	codigo int primary key,
	nombre varchar (20),
	costo int,
	fecha date,
	hora_inicio date,
	hora_fin date,
	tipo_clase varchar (20),
	capacidad int,
	instructor int,
	rol int
);

create table PRODUCTO (
	codigo int primary key,
	nombre varchar (20),
	costo int,
	descripcion varchar (50),
	rol int
	
);

create table TRATAMIENTO_SPA (
	codigo int primary key,
	nombre varchar (20),
	costo int,
	rol int
);

-- asignacion de llaves foraneas ------------------------------------------------------------------

alter table MAQUINA
	add foreign key (tipo) references TIPO_EQUIPO(codigo),
		foreign key (sucursal) references SUCURSAL(nombre)

alter table SUCURSAL
	add foreign key (administrador) references COLABORADOR(cedula)

alter table TELEFONO
	add foreign key (sucursal) references SUCURSAL(nombre)

alter table COLABORADOR 
	add foreign key (rol) references ROL(codigo),
		foreign key (sucursal) references SUCURSAL(nombre)

alter table ROL
	add foreign key (tipo_planilla) references TIPO_PLANILLA(codigo)

alter table CLASE 
	add foreign key (instructor) references COLABORADOR(cedula),
		foreign key (rol) references ROL(codigo)

alter table PRODUCTO
	add foreign key (rol) references ROL(codigo)

alter table TRATAMIENTO_SPA
	add foreign key (rol) references ROL(codigo)
	
