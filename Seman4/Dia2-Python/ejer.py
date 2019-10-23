
class Coordenadas():

    def __init__(self, coordenadaX , coordenadaY):

        self.coordenadaX = coordenadaX
        self.coordenadaY = coordenadaY


    def valores(self):
        print("Los valores ingresados fueron:","(" , self.coordenadaX,",", self.coordenadaY ,")")
        
    def cuadrante(self):
        if(self.coordenadaX > 0 and self.coordenadaY>0 ):
            print("Pertenece al primer cuadrante")
        elif(self.coordenadaX <0 and self.coordenadaY >0 ):
            print("Pertenece al segundo cuadrante")
        elif (self.coordenadaX <0 and self.coordenadaY< 0):
            print("Pertence al tercer cuadrante")
        elif(self.coordenadaX>0 and self.coordenadaY<0):
            print("Pertenece al cuarto cuadrante")
            
    def vector_resultante(self):
        otroX= int(input("Ingrese nueva coordenada X: "))
        otroY= int(input("Ingrese nueva coordenada Y: "))
        
        self.VRX = otroX - self.coordenadaX
        self.VRY = otroY -self.coordenadaY
        print("El vector resultante es:","(" , self.VRX,",", self.VRY ,")")

    def distancia(self):
        
        d = ((self.VRX)**2 + (self.VRY)**2)**0.5
        print("La distancia entre sus puntos es: ", d)
        
    def __resultante(self):
        
        coor.vector_resultante()
        
coor = Coordenadas(coordenadaX = -2, coordenadaY=3)

coor.valores()
coor.cuadrante()
coor.vector_resultante()
coor.distancia()
