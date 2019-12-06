from flask import Flask
from flask_restful import Api
from db import db
#Aqui van los modelos 

# from libreria.controllers.producto import Producto

from Vehiculos.controllers.vehiculo import Vehiculo
from libreria.controllers.categoria import Categoria

from flask_jwt import JWT

from seguridad import autenticacion, identificador

# 
app = Flask(__name__)
#"mysql://username:password@servidor/nombre_bd"

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:root@localhost/vehiculos" 

app.config['SECRET_KEY'] = 'clave-secreta'

jsonwebtoken = JWT(app, autenticacion, identificador)

api = Api(app)

#Creacion de mis tablas
@app.before_first_request
def creacion_tablas():
    db.init_app(app)
    
    # db.drop_all(app = app)
    db.create_all(app=app)
#Agrego mis rutas
# api.add_resource(Producto,'/producto/<string:nombre>', '/producto')

api.add_resource(Vehiculo, '/vehiculo/<string:nombre>', '/vehiculo')
api.add_resource(Categoria, '/categoria/<string:nombre>', '/categoria')


if __name__=="__main__":
    
    app.run(debug = True)