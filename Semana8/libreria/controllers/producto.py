from flask_restful import Resource, reqparse
from libreria.models.producto import ProductoModel


class Producto(Resource):
    
    parser = reqparse.RequestParser()
    parser.add_argument(
        
        'nombre_producto',
        type= str,
        required = True,
        help = "Falta el nombre_producto" 
    )
    parser.add_argument(
        
        'categoria',
        type= str,
        required = True,
        help = "Falta categoria" 
    )
    
    
    def get(self, nombre):
        
        # Selefc * from producto where desc = nombre
        # Query.fetchone()
        producto = ProductoModel.query.filter_by(desc = nombre).first()
        if producto:
            return producto.devolverjson()
        
        return {'message' : 'No existe el producto'}, 404
    
    def post(self):
        data = Producto.parser.parse_args()
        producto = ProductoModel(data['nombre_producto'],data['categoria'])
        
        try:
            producto.guardar_en_bd()
            
        except:
            return{'message': 'Hubo un error al guardar en la base de datos'}, 500
        return {'message': 'Se guardo el producto exitosamente', 'producto' : data['nombre_producto']}
        return {'message': 'Se guardo la categoria exitosamente', 'categoria' : data['categoria']}