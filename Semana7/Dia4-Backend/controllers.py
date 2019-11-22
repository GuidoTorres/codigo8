from flask_restful import Resource, Api, reqparse
from bd import mysql, app
import bcrypt


api = Api(app)


class Reservas(Resource):
    def get(self):
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM T_RESERVA"
        cursor.execute(query)
        resultado = cursor.fetchall()
        cursor.close()
        return {'Reservas': resultado}


class Autenticacion(Resource):
    def post(self):
        pass


@app.route('/usuario/add', methods=["POST"])
class Usuario(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('correo', type=str,
                            required=True, help='Falta el correo')
        parser.add_argument('password', type=str,
                            required=True, help='Falta la contraseña')
        parser.add_argument('nombre', type=str,
                            required=True, help='Falta el nombre')
        parser.add_argument('apellido', type=str,
                            required=True, help='Falta el apellido')
        parser.add_argument('telefono', type=str,
                            required=True, help='Falta el telefono')

        data = parser.parse_args()
        # Encriptacion de contraseña
        password = bytes(data['password'], 'utf-8')
        salt = bcrypt.gensalt(rounds=10)
        hashed = bcrypt.hashpw(password, salt)
        print(salt)
        print(hashed)
        saltstr = salt.decode('utf-8')
        hashedstr = hashed.decode('utf-8')
        cur = mysql.connection.cursor()

        cur.execute(
            f"INSERT INTO T_USUARIO(usu_email, usu_hash, usu_salt, usu_rol, usu_nom, usu_ape, usu_fono) VALUES ('{data['correo']}', '{hashedstr}', '{saltstr}', 'vendedor', '{data['nombre']}', '{data['apellido']}','{data['telefono']}')")

        mysql.connection.commit()
        cur.close()
        return {'message': 'Usuario creado exitosamente'}


@app.route('/')
class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('correo', type=str,
                            required=True, help='Falta el correo')
        parser.add_argument('password', type=str,
                            required=True, help='Falta la contraseña')
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM T_USUARIO WHERE USU_EMAIL = %s",
                    (data['correo'],))
        respuesta = cur.fetchone()
        cur.close()
        if(respuesta):
            password = bytes(data['password'], 'utf-8')
            salt = bytes(respuesta[3], 'utf-8')
            hashed = bcrypt.hashpw(password, salt)
            hashedstr = hashed.decode('utf-8')
            if hashedstr == respuesta[2]:
                return {'message': 'Bienvenido'}
            else:
                return{'message': 'Usuario o contraseña incorrecta'}, 404

        else:
            return{'message': 'Usuario o contraseña incorrectos'}, 404


# @app.route('/agregar/playa', methods = ["POST"])

class AgregarPlaya(Resource):

    def post(self):
        
        
        parser = reqparse.RequestParser()
        
        parser.add_argument('direccion', type=str,
                            required=True, help='Falta la direccion')
        parser.add_argument('cantidad', type=int,
                            required=True, help='Falta la cantidad')
        parser.add_argument('precioAuto', type=float, required=True,
                            help='Falta precio auto')
        parser.add_argument('precioMoto', type=float, required=True,
                            help='Falta precio moto')
        parser.add_argument('precioCamioneta', type=float,
                            required=True, help='Falta precio camioneta')

        data = parser.parse_args()
        cur = mysql.connection.cursor()

        cur.execute(f"insert into t_playa(playa_dir) values ('{data['direccion']}')")
        mysql.connection.commit()
        # cur.close()

        for cantidad in data['cantidad']:
            cur.execute(f"insert into t_slotplaya(slot_nro) values ({data['cantidad']}) ")
            mysql.connection.commit()
        # cur.close()

        cur.execute(f"insert into t_tipovehiculo(tipo_precio) values ({data['precioAuto']}) ")
        mysql.connection.commit()
        # cur.close()

        cur.execute(f"insert into t_tipovehiculo(tipo_precio) values ({data['precioMoto']})")
        mysql.connection.commit()
        # cur.close()

        cur.execute(f"insert into t_tipovehiculo(tipo_precio) values ({data['precioCamioneta']}) ")

        mysql.connection.commit()

        cur.close()
        return {'message': 'Playa creada exitosamente'}


api.add_resource(Usuario, "/usuario")
api.add_resource(Reservas, "/reservas")
api.add_resource(Login, "/usuario/login")
api.add_resource(AgregarPlaya, "/agregar/playa")
