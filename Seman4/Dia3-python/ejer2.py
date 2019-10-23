# class Alumno():

#     def __init__(self, nombre, apellido, notas):

#         self.nombre = nombre
#         self.apellido = apellido
#         self.__notas = notas
        
        
#     def promedio(self):
        
#         sum = 0
#         self.total = 0
#         for i in range(0, 5):
            
#             sum = sum + self.__notas[i]
            
#         self.total = sum / 5
#         print("Tu promedio es: {}".format(self.total)) 
        
#     def mostrar(self):
        
#         if(self.total > 10):
            
#             print("Tienes {} estas aprobado.".format(self.total))
#         else:
#             print("Estas desaprobado")
    

# alumno1 = Alumno("Guido", "Torres", [12, 13, 15, 10, 12])


# alumno1.promedio()
# alumno1.mostrar()


class Agenda():
    
    def __init__(self, nombre, telefono, correo):
        
        self.nombre = nombre
        self.telefono = telefono
        self.correo = correo
    
    
    def agregar_contacto():
        
        self.diccionario = {
            
            'nom' : ''
            'tele': ''
            'cor' : ''
             
        }
        opcion= int(input("""
              1. Ingrese Nombre:
              2. Ingrese Telefono:
              3. Ingrese correo:"""))
        
                
        elif opcion == 1:
            
            self.nombre = input("Ingrese el nombre")
            self.diccionario.nom.append(nombre)
            
        elif opcion ==2:
            self.telefono = input("Ingrese el telefono")  
            self.diccionario.tel.append(telefono)
    
        
        elif opcion == 3:
            
            self.correo = input("Ingrese el correo")
            self.diccionario.cor.append(correo)
    
    def mostrar_contacto():
        
        print("El nombre es {}, su telefono {}, y su correo{}" .format(self.nombre, self.telefono, self.correo))
        
    
    def buscar_contacto():
        pass
    
    
    
diccionario1 = Agenda();     
                
