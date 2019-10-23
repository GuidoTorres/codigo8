

# excepciones => try ... except ... else ... finally

# try:
#     #Todo lo que va a suceder dentro del try y si hay un error
#     #no va incidir con el funcionamiento de nuestro programa
#     n1 = int(input("Ingrese numero 1: "))
#     n2 = int(input("Ingrese numero 2: "))

#     division = n1 / n2

#     print(division)
# except ZeroDivisionError:
#     print("No puedes dividir entre 0 ")    
# except:
#     print(EnvironmentError)#Para ver el error que se tiene
#     print("Hubo un error al ingresar datos")
    
# else:
#     print("La division funciono bien")
    
# finally:
#     print("No importa si funciono la division o no")
    
    
exito = 0
while (exito ==0):
    try:
        n1 = int(input("Ingrese numero 1: "))
        n2 = int(input("Ingrese numero 2: "))

        multiplicacion = n1 * n2

        print(multiplicacion)
        exito = 1
    
    except:
        print("No puede ingresar caracteres, vuelve a intentarlo")
        exito = 0