class Productos:

    def __init(self):

        self.__fecha_caducidad = ''
        self.__nro_lote = ''
        self.__fecha_expiracion = ''
        self.__pais = ''
        
    def setProductos(self, fecha_caducidad, nro_lote, fecha_expiracion, pais):
        self.__fecha_caducidad = fecha_caducidad
        self.__nro_lote = nro_lote
        self.__fecha_expiracion = fecha_expiracion
        self.__pais = pais
        
    def getProductos():
        return self.__fecha_caducidad, self.__nro_lote, self.__fecha_expiracion, self.__pais 
        
    # fecha_caducidad = property(getProductos,setProductos)
    # nro_lote = property(getProductos,setProductos)
    # fecha_expiracion = property(getProductos,setProductos)
    prod = property(getProductos,setProductos)


class Productos_frescos(Productos):

    def __init__(self):

        self.__fecha_envasado = ''
        self.__pais = ''
        

    def setProductos_frescos(self, fecha_envasado, pais):

        self.__fecha_envasado = fecha_envasado
        self.__pais = pais

    def getProductos_frescos(self):

        return self.__fecha_envasado, self.pais

    # fecha_envasado = property(getProductos_frescos,setProductos_frescos)
    # pais = property(getProductos_frescos,setProductos_frescos)
    prodFrescos = property(getProductos_frescos,setProductos_frescos)

class Productos_refrigerados(Productos):

    def __init__(self):

        self.__cod_organismo = ''
        self.__fecha_envasado = ''
        self.__temperatura_recomendada = ''
        self.__pais = ''
        
    def setProductos_refrigerados(self, cod_organismo, fecha_envasado, temperatura_recomendada, pais):
        
        self.__cod_organismo = cod_organismo
        self.__fecha_envasado = fecha_envasado
        self.__temperatura_recomendada = temperatura_recomendada
        self.__pais = pais

    def getProductos_refrigerados(self):
    
        return self.__cod_organismo, self.__fecha_envasado, self.__temperatura_recomendada, self.__pais
    
    
    prodRefrigerados = property

class Productos_congelados(Productos):

    def __init__(self):
        
        self.__fecha_envasado = ''
        self.__pais = ''
        self.__temperatura_recomendada = ''
        
    def setProductos_congelados(self, fecha_envasado, pais, temperatura_recomendada):
        
        self.__fecha_envasado =fecha_envasado
        self.__pais = pais
        self.__temperatura_recomendada = temperatura_recomendada
        
    def getProductos_congelados(self):
        
        return self.__fecha_envasado, self.__pais, self.__temperatura_recomendada
        
        




producto1 = Productos()

producto1.prodFrescos = "2019-10-24", "Peru"

prodFrescos = producto1.prodFrescos


print(prodFrescos)