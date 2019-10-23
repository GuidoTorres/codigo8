#class Vehiculo():
#     # largo = 200
#     # ancho = 130
#     # ruedas = 4
#     # enMarcha = False
#     def __init__(self, largo = 200, ancho = 130, ruedas = 4, enMarcha = False, motor = 1500):
#         self.largo = largo
#         self.ancho = ancho
#         self.ruedas = 4 ## para volver privado el atributo se pone __ alinicio
#         self.enMarcha = enMarcha
#         self.motor = motor
        
# # MEtodo : es una funcion espescial que pertenece exclusivamente a la clase donde se esta creando
# # Funcion : no pertenece a ninguna clase

#     def arrancar(self, arrancamos):
#         self.enMarcha = arrancamos
#         if(self.enMarcha):
#             chequeo = self.__chequeo_interno()
#         if(self.enMarcha and chequeo):
#             return "El coche esta en marcha sin ningun problema"
#         elif(self.enMarcha and chequeo == false):
#             return "El coche esta en marcha pero tine algun problema"
#         else:
#             return "El coche esta parado"
    
#     def estado(self):
#         print( "El auto tiene: ", self.ancho,"\nDe largo: " ,self.largo, "\nNum de ruedas: ",
#         self.ruedas,"\nMotor: ", self.motor)
        
#     def __chequeo_interno(self): #Encapsulamos metodo para que solo funcione solo dentro de la clase
#         """Metodo de la clase vehiculo que srive para hacer una revision del vehiculo antes de arrancar"""
#         self.gasolina = 30
#         self.aceite = "ok"
#         self.temperatura = 0
#         self.puertas = "cerradas"
#         if(self.gasolina > 25 and self.aceite == "ok" and self.temperatura<60 and self.puertas =="cerradas"):
#             return True
#         else:
#             return False
        
# # instanciar una clase / ejemplificar una clase/ crear un objeto

# miAuto = Vehiculo(largo = 150)
# # miAuto.ruedas = 1
# print(miAuto.arrancar(True))
# #print(miAuto.__chequeointerno()) # al hacer el metodo privado ya no se puede acceder a el fuera de la clase
# print("El largo del auto es", miAuto.largo)
# miAuto.estado()

# # que es encapsular : es un pilar de poo que nos dice que podemos seleccionar que atributos
# #queremos que se muestren fuera de la clase y que atributos no pueden ser modificados fuera de la misma
#Tu debes encapsular los metodos y atributos cuando tu clase asi lo necesite y eso depende
#del comportamiento de su clase

class Persona():
        def __init__(self, nombre= "Guido", edad = 25, sexo = "masculino", dni = 72798529  ):
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo
        self.dni = dni
       
       
        def estado(self):
            print( "El nombre de la persona: ", self.nombre,"\nEdad: " ,self.edad, "\nSexo: ",
            self.sexo,"\ndni: ", self.dni)
        
        
        
perso1.estado()
