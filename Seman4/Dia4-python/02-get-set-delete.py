
class Persona:
    def __init__(self):
        self.__name = ''
        
    def setname(self, name):
        print('el setname() ha sido llamado')
        self.__name = name
    def getname(self):
        print('el getname() a sido llamaso')
        return self.__name
    def delname(self):
        print('el delname() ha sido llamado')
        del self.__name
    # la funcion property sirve para definir nuestras funciones de get, set, delete    
    name = property(getname, setname, delname)
    
    
persona1 = Persona()
persona1.name = "Guido"
# persona1.name 
name = persona1.name
del persona1.name