from flask_restful import Resource, reqparse
from Vehiculos.models.vehiculo import VehiculoModel


class Vehiculo(Resource):
    
    parser = reqparse.RequestParser()
    parser.add_argument(
        
        'marca_vehiculo',
        type= str,
        required = True,
        help = "Falta la marca_vehiculo" 
    )
    parser.add_argument(
        
        'modelo_vehiculo',
        type= str,
        required = True,
        help = "Falta modelo" 
    )
    
    
    def get(self, marca):
        
        # Selefc * from producto where desc = nombre
        # Query.fetchone()
        vehiculo = VehiculoModel.query.filter_by(desc = marca).first()
        if vehiculo:
            return vehiculo.devolverjson()
        
        return {'message' : 'No existe el vehiculo'}, 404
    
    def post(self):
        data = Vehiculo.parser.parse_args()
        vehiculo = VehiculoModel(data['marca_vehiculo'],data['modelo_vehiculo'])
        
        try:
            producto.guardar_en_bd()
            
        except:
            return{'message': 'Hubo un error al guardar en la base de datos'}, 500
        return {'message': 'Se guardo el vehiculo exitosamente', 'vehiculo' : data['marca_vehiculo']}
        # return {'message': 'Se guardo la categoria exitosamente', 'categoria' : data['categoria']}