use [admingymtec]
go
create procedure [dbo].[SPloginrol]
@correo varchar(50),
@contrasena varchar(20),
@rol varchar(50) output
as
begin
	select @rol=R.descripcion
	from COLABORADOR as C join ROL as R on C.rol=R.codigo
	where C.correo=@correo and C.contrasena=@contrasena
end
