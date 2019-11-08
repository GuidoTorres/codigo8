
use dia3;

# parar agregar una nueva columna se modifica con alter TAble y parar agregar se usa add column nombre_columna tipo_columna
# y si la querremos al comienzo ponemos first
alter table empleados add column dni int;

select *from empleados;


# drop column sitrve para eliminar una columna simepre y cuando no sea PK y tenfa herencias

alter table empleados drop column dni;
#Opcionalmente podemos decir en que posicion usando after nombre_columnna
alter table empleados add column dni int after nombre_empleado;


# modify sirve para modificar una columna por su tipo de dato o sus restricciones


alter table empleados modify dni varchar(25);

