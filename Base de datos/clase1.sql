#create table
#nombre de la tavla 
#campo de los atributos
#definicion de cad campo

#create table nombre_tabla(nombre de la columna, tipo de la columna)
#aparte de definir el nobre y tipo se pueden añadir opciones extras, como por ejemplo:
# not null = eso va a pertmitir que cuando querarmos ingresar o editar una tupla 
#no podadmos dejarla en blanco o nula, 

# Auto_incremento => eso ca de la mno si es una columna de tipo int y va a autoincementarse de 1 en 1
#generalmente se usa para las llaves primarias (pk)

# Primary key es usada para definir que una columna va a ser la llave primaria de nuestra tabla
#por lo que no se puede repetir en alguna tupla.alter


#para tenrer una tabla tentemos que decir donde se va a crear esa tabala(mysql las bases de datos schema) para crear un nuevo schema se usa lo siguiente
#create schema nombre_bd
#y parar alternar entre diferentes schemas se usa el comando:

#use nombre_bd

#create schema codigo8;
#use codigo8

#parar ejecutar la parte de script se presiona el rasho

create table alumno(

	id_alumno int not null auto_increment primary key,
    nombre varchar(40),
    apellido varchar(50),
    email varchar(35)

);


# la forma de eliminar una tabla es :
#drop table nombre_tabla;
# nota: no podemos eliminar una tabla que tenga relacion de muchos a uno
#pero si de uno a muchos.alter

drop table alumno;

#insertat una nueva tupla auna tabal es de la siguiente forma:

insert into alumno(nombre, apellido, email) values ('Guido', 'Torres', 'gt12930@gmail.com');


create table cuadernos(

	id_cuaderno int primary key not null auto_increment,
    tamanio varchar(40),
    alumno_id int,
    foreign key(alumno_id) references alumno(id_alumno)

);



