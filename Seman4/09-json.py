# JSON = Javascripot object notation
# Forma de alamacenar e intercambiar datos que estan en fomrato de texto
import json
producto1 = {
    
    "nombre": "silla",
    "color": "fucsia",
    "precio": 50.00
} 
# CONVERRTIR DICCIONARIO A JSON
estructura_json = json.dumps(producto1)
print(estructura_json)
print(producto1["nombre"])

#CONVERTIR JSON A DICCIONARIO

producto2 = json.loads(estructura_json)
print(producto2)
print(producto2["precio"])