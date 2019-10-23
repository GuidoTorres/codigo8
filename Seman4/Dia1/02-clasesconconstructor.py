# class Persona:
#     #Este es el constructor de la clase 
#     #Se usa self para instaciar todos los atributos de la clase, se crean
#     #con el constructor y se pueden utilizar en todos los metodos
#     def __init__(self, nombre, edad):
#         self.nombre = nombre
#         self.edad = edad
#     def saludar(self):
#         print("Hola, me llamo {} y tengo {} años".format(self.nombre, self.edad))
        
# persona1 = Persona("Guido", 25)
# print(persona1.nombre

# persona1.saludar()
        
        
#CRear una clase persona que tenga de atributos sus datos personales y su experencia laboral,
#que se ingrese por un menu la opc1 para ingresr nueva experiencia laboral, 
# que la opcion 2 la muestre
#la opc 3 la elimine 
# y opc 4 salga del programa


class Persona:
    def __init__(self, nombre, apellido, edad, explaboral):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.explaboral = []
    
persona1 = Persona("Guido", "Torres" , 25, "AAAA")      
   
        
opcion = +input("""======MENU========
                    1. Ingresar experiencia laboral
                    2. Mostrar
                    3. Eliminar 
                    4. Salir""")

elif (opcion == 1):
    exp = input("Ingrese nueva experiencia laboral: ")
    explaboral.append(exp)
    
elif (opcion == 2):
    
    print(persona1.explaboral)
      
elif (opcion == 3):
    
    explaboral1.remove(exp)
    
    
elif (opcion == 4):
    
    
        