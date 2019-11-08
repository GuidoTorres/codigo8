from flask import Flask, request, jsonify


app = Flask(__name__)

supermercado = [
    
    {
        
        'nombre': 'Super',
        'productos' : [
            
            {
                'nombre': 'Leche Gloria',
                'precio': 4.20
            }
        ]
    
        
        
    }
]

@app.route('/')
def inicio():
    return 'Lista de supermercado'


#GET => se utiliza para solicitar data sin mandar nada

#POST => se usa para mandar informacion por medio del body

#PUT => se usa para actualizaar informacion con contenido en su body

#DELETE =Z se usa pra eliminar infomracion

@app.route('/tiendas', methods = ['POSTS'])

def crear_tienda():
    
    data = request.get_json() #ESte metodo automaticamente convierte el json en un diccionario
    nuevo_supermercado ={
        
        'nombre': data['nombre'],
        'productos': []
        
    }
    
    supermercado.append(nuevo_supermercado)
    return jsonify(nuevo_supermercado)

@app.route('/tiendaXnombre/<string:nombre>', methods = ['GET'])
def traer_tienda(nombre):
    #Ahi si tiene que coincidir el nombre de la variable en su url con el nombre de la variable del parametro

    for tienda in supermercado:
        if(tienda['nombre'] == nombre):
            return jsonify(tienda), 202
        
           
    
    return f'No se encontro la tienda con el nombre {nombre}', 404


#Traer todos los supermercados con sus productos
@app.route('/tiendas', methods = ['GET'])

def traer_tiendas():
    return jsonify({'supermercados': supermercado})

#Agregar un nuveo producto a un supermercado en especifico


@app.route('/tiendas/<string:nombre_tienda>/agregar_producto')

def agregar_producto(nombre_tienda):

    for tienda in supermercado:
        if tienda['nombre'] == nombre_tienda:
            
            dataProducto = request.get_json()
            nuevo_producto={
                
                'nombre': dataProducto['nombre'],
                'precio': dataProducto['precio']
            }
            
        tienda['productos'],append(nuevo_producto)
        return jsonify(tienda)
    return jsonify({'message':'No se encontro esa tienda'}), 404


#Traer todos los porductos de una tienda

@app.route('/tiendas/<string:nombre>/item')

def traer_todos_productos(nombre):
    for tienda in supermercado:
        if tienda['nombre'] == nombre:
            return jsonify({'Productos': tienda['productos']})
    return jsonify(
        
        {'message': 'No se encontro esa tienda'}
    )

app.run(port = 5000, debug = True)
    
    