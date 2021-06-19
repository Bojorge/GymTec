set dateformat dmy;		

-- insersion de tipos de equipo

insert into TIPO_EQUIPO (codigo, nombre)
values (1001,'peso libre')

insert into TIPO_EQUIPO (codigo, nombre)
values (1002,'polea')

insert into TIPO_EQUIPO (codigo, nombre)
values (1003,'cardio')


-- insersion de tipos de planilla

insert into TIPO_PLANILLA(codigo, descripcion, pago_clase, pago_hora, pago_mes)
values (2001,'instructor de pesas', 20000, 5000, 500000)

insert into TIPO_PLANILLA(codigo, descripcion, pago_clase, pago_hora, pago_mes)
values (2002,'instructor de zumba', 30000, 8000, 500000)

insert into TIPO_PLANILLA(codigo, descripcion, pago_clase, pago_hora, pago_mes)
values (2003,'instructor de spinning', 25000, 7000, 500000)

insert into TIPO_PLANILLA(codigo, descripcion, pago_clase, pago_hora, pago_mes)
values (2004,'vendedor', 0, 3000, 300000)


-- insersion de roles

insert into ROL (codigo, descripcion, tipo_planilla)
values (1795, 'hacer rutinas para clientes', 2001 )

insert into ROL (codigo, descripcion, tipo_planilla)
values (1692, 'guiar clases de spinning', 2003 )

insert into ROL (codigo, descripcion, tipo_planilla)
values (1347, 'atender clientes', 2004 )

insert into ROL (codigo, descripcion, tipo_planilla)
values (1767, 'vender y cobrar productos', 2004 )


-- insersion de sucursales

insert into SUCURSAL (nombre, provincia, canton, distrito, fecha_apertura, capacidad, horario, administrador)
values ('Gym1', 'Cartago', 'Central', 'Oriental', '01-08-14', 100,'5am-9pm / L-S', null)

insert into SUCURSAL (nombre, provincia, canton, distrito, fecha_apertura, capacidad, horario, administrador)
values ('Gym2', 'San Jose', 'Montes de Oca', 'San Pedro', '06-12-16', 200,'24/7', null)

insert into SUCURSAL (nombre, provincia, canton, distrito, fecha_apertura, capacidad, horario, administrador)
values ('Gym3', 'Limon', 'Siquirres', 'Pacuarito', '09-03-18', 80,'10am-10pm  / 7', null)


-- insersion de colaboradores en el gym 2			

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (104670824, 'carpathianforest@gmail.com', 'forestcarpathian', 'Francisco', 'Romero', 'Chinchilla', 'San Jose', 'Escazu', 'San Antonio', 1795, 'Gym2')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (107580284, 'dragonslayer@gmail.com', 'slayerdragon', 'Helena', 'Porras', 'Lee', 'San Jose', 'Desamparados', 'Gravilias', 1692, 'Gym2')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (103590230, 'aceofbase@gmail.com', 'baseoface', 'Jennifer', 'Acuna', 'Garcia', 'San Jose', 'Tarrazu', 'San Marcos', 1347, 'Gym2')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (105460096, 'vanillaninja@gmail.com', 'ninjavanilla', 'Kattia', 'Quesada', 'Obando', 'San Jose', 'Mora', 'Tabarcia', 1767, 'Gym2')


-- insersion de colaboradores en el gym 1

-- este cuenta con los  permisos de administrador dado por el rol 2222
insert into colaborador (cedula,correo,contrasena,nombre,apellido1,apellido2,provincia,canton,distrito,rol,sucursal)
values (304440643,'mbojorge@estudiantec.cr','2016093626','Manuel','Bojorge','Araya','Cartago','El Guarco','San Isidro',2222,'Gym1')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (304390821, 'childrenofbodom@gmail.com', 'bodomofchildren', 'Adriana', 'Jimenez', 'Suarez', 'Cartago', 'El Guarco', 'Guadalupe', 1795, 'Gym1')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (314670794, 'amonamarth@gmail.com', 'amarthamon', 'Carlos', 'Calderon', 'Bogantes', 'Cartago', 'Oreamuno', 'Cipreses', 1692, 'Gym1')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (309460926, 'walkingthedemon@gmail.com', 'demonthewalking', 'Andrea', 'Ramirez', 'Badilla', 'Cartago', 'Turrialba', 'Pavones', 1347, 'Gym1')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (305380197, 'dreamtheater@gmail.com', 'theaterdream', 'Oscar', 'Lopez', 'Escalante', 'Cartago', 'Paraiso', 'Cachi', 1767, 'Gym1')


-- insersion de colaboradores en el gym 3

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (709260837, 'sepulturaroots@gmail.com', 'rootssepultura', 'Victor', 'Garita', 'Montoya', 'Limon', 'Guacimo', 'Pocora', 1795, 'Gym3')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (703700826, 'northernconfort@gmail.com', 'confortnorthern', 'Esteban', 'Varela', 'Barboza', 'Limon', 'Matina', 'Chirripo', 1692, 'Gym3')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (708390822, 'linkinpark@gmail.com', 'parklinkin', 'Veronica', 'Ugalde', 'Rosales', 'Limon', 'Siquirres', 'Siquirres', 1347, 'Gym3')

insert into COLABORADOR (cedula, correo, contrasena, nombre, apellido1, apellido2, provincia, canton, distrito, rol, sucursal)
values (719840258, 'thedistillers@gmail.com', 'distillersthe', 'Jesica', 'Ortega', 'Cascante', 'Limon', 'Limon', 'Rio blanco', 1767, 'Gym3')


-- insersion de maquinas en el gym 1

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (90001,'barra olimpica', 'Bearbar', 150000, 'Gym1', 1001)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (90002,'disco 45 libras', 'Bulldisc', 70000, 'Gym1', 1001)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (90003,'espalda', 'Titanium', 300000, 'Gym1', 1002)


-- insersion de maquinas en el gym 2

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (91001,'prensa para piernas', 'Ironforce', 350000, 'Gym2', 1001)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (91002,'eliptica', 'Fitlife', 200000, 'Gym2', 1003)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (91003,'biceps y triceps', 'Powerwolf', 250000, 'Gym2', 1002)


-- insersion de maquinas en el gym 3

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (92001,'barra olimpica', 'Bearbar', 150000, 'Gym3', 1001)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (92002,'eliptica', 'Fitlife', 200000, 'Gym3', 1003)

insert into MAQUINA (serie, descripcion, marca, costo, sucursal, tipo)
values (92003,'biceps y triceps', 'Powerwolf', 250000, 'Gym3', 1002)
