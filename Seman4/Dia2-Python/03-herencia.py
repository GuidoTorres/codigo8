class Vehiculos():
    
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.andando = False
        self.acelera = False
        self.frena = False
    
    def arrancar(self):
        self.andando = True
        
    def acelerar(self):
        self.acelerar = True
        
    def frenar(self):
        self.frena = True
        
    def estado(self):
        print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando:", self.andando,
              "\nAcelerando: ", self.acelera, "\nFrenando", self.frena)
 
 
class Moto(Vehiculos):
    hacer_caballito=""
    def caballito(self):
        self.hacer_caballito= "Estoy haciendo caballito"
    #Sobre escritura de metodos
    
    def estado(self):
        print("Marca: ", self.marca, "\nModelo: ", self.modelo, "\nAndando:", self.andando,
              "\nAcelerando: ", self.acelera, "\nFrenando", self.frena, "\nCaballito", self.caballito)

class Camioncito(Vehiculos):
    def cargar(self, cargar):
        self.cargado = cargar
        if (self.cargado):
            return "El camioncito esta cargado"
        else:
            return "El camioncito tiene esapcio para cargar"


class VehiculoElectrico():
    # autonomia = 100
    def __init__(self):
        self.autonomia = 100
    def cargarEnergia(self):
        self.cargando = True 
        
    # def autonomia(self):
    #     self.autonomia = 100    
           

# carro = Vehiculos("Hyundai", "Tucson")
# moto = Moto("Honda", "250")
# # carro.estado()
# moto.caballito()
# moto.estado()
# print(moto.hacer_caballito)

# micamioncito = Camioncito("Volvo", "F100")
# micamioncito.arrancar()
# micamioncito.estado()

#Si sobreescribimos un metodo, solo funciona epara el hijo que lo sobrescribio
#y prar sus hijos, pero no para sus hermanos



#Herencia multiple => cuando heredamos de varios padres
#solamente va a utilizar el constructor del padre mas cercano a la izquierda



class BiciElectrica(Vehiculos, VehiculoElectrico):
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        # super() => llama al metodo de la clase padre
        
        super().__init__(self.marca, self.modelo)
        
        #Para llamar al constructor de clase secundario, se ponde su nombre y se le manda
        #los parametros self
        VehiculoElectrico.__init__(self)
        #vehiculos.__init__(self.marca, self.marca)
        
    def estado(self):
        super().estado()
        print("Autonomia: ", self.autonomia)
    


miBici = BiciElectrica("AAA", "BBB")
miBici.estado()



