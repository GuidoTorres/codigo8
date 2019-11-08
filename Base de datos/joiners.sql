use dia3;
create table Departamentos(

	id_departamentos int auto_increment not null,
    nombre_departamentos varchar(100),
	primary key(id_departamentos)
);

create table Empleados(

	id_empleado int auto_increment not null primary key,
    nombre_empleado varchar(50),
    id_departamentos int,
    foreign key(id_departamentos) references Departamentos(id_departamentos)
);


insert into Departamentos values(1, 'Ventas');
insert into Departamentos values(2, 'Administracion'),
(3, 'Finanazas'), 
(4, 'Marketing');

select *from Departamentos;


insert into Empleados values(1, 'Juan Rodriguez', 2);



 insert into Empleados values(2, 'Pedro Reyes', 3);
 insert into Empleados values(3, 'Rosa Melgrano', 2);
 insert into Empleados values(4, 'Devora Meltrozo', 3); 
insert into Empleados values(8, 'Ana Lisa Polanco', 1);

 insert into Empleados values(6, 'Esteban Quito ', null);
 
 #Inne join interseccion de las 2 tablas
 #si nosotros ponemos solo join se sobre entiende que es inner join
 select *from empleados inner join departamentos on empleados.id_departamentos = departamentos.id_departamentos;
 
 
 #left join => todo lo que contiene el universo a
 
  select * from empleados left join departamentos on empleados.id_departamentos = departamentos.id_departamentos;

 select nombre_empleado, id_departamentos from empleados inner join departamentos on empleados.id_departamentos = departamentos.id_departamentos;
 delete from  empleados where id_empleado = 2;
 
 
 select *from empleados;
 
   select E.ombre_empleado, D.nombre_departamentos, E.id_departamentos from empleados as E left join departamentos as D on E.id_departamentos = D.id_departamentos union
   select E.nombre_empleado, D.nombre_departamentos, E.id_departamentos from empleados as E right join departamentos as D on E.id_departamentos = D.id_departamentos;
      
	
      

   

 
 
