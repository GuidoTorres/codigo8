
# # class Persona():

# # #Constructor
# #     def __init__(self, nombre, edad, nacionalidad, dni):
# #         self.nombre = nombre
# #         self.edad = edad
# #         self.nacionalidad = nacionalidad
# #         self.dni = dni

# #     def descripcion(self):
# #         print("Hola me llamo: {}, tengo, {}años y soy {} y mi dni es {} ".format(self.nombre, self.edad, self.nacionalidad, self.dni))

# # class Empleado(Persona):
# #     def __init__(self, salario, antiguedad, nombre_empleado, edad_empleado, nacionalidad_empleado, dni_empleado):

# #         super().__init__(nombre_empleado, edad_empleado, nacionalidad_empleado, dni_empleado)
# #         self.salario =salario
# #         self.antiguedad = antiguedad

# #     def descripcion(self):
# #         super().descripcion()
# #         print("Mi salario es de: {} y trabajo hace {} años" .format(self.salario, self.antiguedad))

# # Juan = Persona("Juan", 25, "Arequipeño", 72798529)
# # Juan.descripcion()


# # #Principio de sustitucion: es siempre un/una pero no necesariamente a la inversa
# # #isintance => si es una instacia de esa clase retorna True y sino lo es retorna false


# class Perros():
#     def __init__(self, ladrar, gruñir, nombre):

#         self.ladrar = ladrar
#         self.gruñir = gruñir
#         self.nombre = nombre


#     def descripcion(self):

#         print("""
#         Mi perro
#         Puede ladrar: {}
#         Puede grunir: {}
#         Se llama: {} """ .format(self.ladrar, self.gruñir, self.nombre))


# class Caniche(Perros):
#     pass

# class Pastor_Aleman(Perros):
#     pass


# class Shepadoodle(Caniche, Pastor_Aleman):
#     pass


# perro1 = Caniche("Si", "Si", "AAA")

# perro1.descripcion()


class Alumno():

    def __init__(self, nombre, apellido, notas):

        self.nombre = nombre
        self.apellido = apellido
        self.notas = []

    def promedio(self):

        for elemento in self.notas:

    def mostrar(self)

    print(notas)


alumno1 = Alumno("Guido", "Torres", [12, 13, 15, 10, 12])

# alumno1.promedio():

alumno1.mostrar()
