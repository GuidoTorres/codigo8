create table alumno(

	id_alumno int not null auto_increment primary key,
    nombre varchar(40),
    apellido varchar(50),
    email varchar(35)

);

insert into alumno(nombre, apellido, email) values ('Guido', 'Torres', 'gt12930@gmail.com');


create table cuadernos(

	id_cuaderno int primary key not null auto_increment,
    tamanio varchar(40),
    alumno_id int,
    foreign key(alumno_id) references alumno(id_alumno)

);

# para seleccionar el contenido de una tabla se usa el siguiente comando
#select nombre_campo, cnombre campo1, from nombre_tabla[where condition]
#select : selecciona los siguientes campos
#from : deque tabla otablas
#where: es un campo opcional para poner restricciones
#Nota: si queremos selccionar todos los campos de un tabla usamos el *


insert into cuadernos(tamanio, alumno_id) values('A4', 1);


delete from cuadernos where id_cuaderno = 2;

select *from cuadernos;