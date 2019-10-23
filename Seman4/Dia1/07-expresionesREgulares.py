# # #Es un secuencia de caracteres que forma una busqueda de un patron
# # y sirve para identificar si una cada de texto contiene un patron especifico
import re

# text = "Hola mi nombres es "
# print(re.search("nombre",text))

# if(re.search("nombre", text)):
#     print("Se encontro la palabra nombre")
# else:
#     print("No se encontro la palabra a buscar")
    
    
# #buscar la palabra la final de la oracion

# print(re.search("es$", text))

# #Buscar la palabra en le inicio

# print(re.search("^Hola", text))

# #findall = busca todas las coincidencias que hay en un texto
# text2 = """
# El auto de Eduardo es azul,
# El auto de Jorge es cafe,
# El auto de Juan es azul"""
# #.* no importa lo que hay entre dos pañlabras auto.*azul
# print(re.findall("auto", text2))

# text3 = "Es lunes y el cielo es azul"

# #sirve para separar lo que esta contenido en una cadena de texto
# print(re.split(" ", text3))

# #sirve para reeemplazar la palabra a buscar x una nueva plaabra como segundo parametro
# print(re.sub("lunes", "viernes", text3))

# print(ord("a"))


text = input("Ingrese texto: ")

arreglo = re.split(" ", text)

for init in arreglo:
    
    if(ord(init[0]) >=97 and ord(init[0])<= 127):
        mayus = ord(init[0]) -32
        # init[0] = chr(mayus)
        
        print(chr(mayus))
    
    for init1 in text:
     

        init[0] = re.sub(ord(init[0]), mayus, text)
    
    
        
      