
class Vehiculo:
    pass


class Automovil:
    def movilidad(Vehiculo):
        print("me muevo con 4 ruedas")
        
        
        
class Bicicleta:
    def movilidad(Vehiculo):
        print("Me muevo con 2 ruedas")
        
        
class Patines:
    def movilidad(Vehiculo):
        print("Me muevo con 3 ruedas")
        

# miAutito = Automovil()
# miAutito.movilidad()

# miBici = Bicicleta()
# miBici.movilidad()

# mispatines = Patines()
# mispatines.movilidad()

#polimorfismo es como se va a comportar la misma funcion dependiendo de en que clase se encuentre
def movilidad(Vehiculo):
    Vehiculo.movilidad()

miVehiculo = Bicicleta()
movilidad(miVehiculo)






#Tipos de encapsulamiento
# _x pretected
# __y private