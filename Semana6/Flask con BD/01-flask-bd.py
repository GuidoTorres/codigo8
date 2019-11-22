from flask import Flask, jsonify, request

from flask_mysqldb import MySQL

app = Flask(__name__)

#credenciales de mysql

app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'apiflask'

#Creamos una variabel de tipo mysql y le mandamos la configuracion

mysql = MySQL(app)

@app.route('/supermercados/traer')

def inicio():
    cur = mysql.connection.cursor()
    cur.execute('SELECT *FROM SUPERMERCADOS')
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)


@app.route('/supermercados/agregar', methods=['POST'])
def agregar_super():
    info = request.get_json()
    if(info['nombre'] and info['direccion']):
        # Crea conexioncon base de datos
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO SUPERMERCADOS (nom_super, dir_super) VALUES (%s,%s)', (info ['nombre'], info['direccion']))
    resultado = mysql.connection.commit()
    print(resultado)
        cur.close
        
        # conevertir string a json = jsnoify
        return jsonify({'message': 'Se agrego con exito', 'content': info})
    else:
        
        return jsonify({'message': 'Faltan valores'})
    
    
@app.route('/cliente/agregar', methods = ['POST'])

def agregar_cliente():
    data = request.get_json()
    if(data.__contains__('nombre') and data.__contains__('apellido') and data.__contains__('categoria')):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO cliente (nom_cli, ape_cli, cat_cli) VALUES (%s,%s, %s)', (data ['nombre'], data['apellido'], data['categoria']))
        resultado = mysql.connection.commit()
        print(resultado)
        cur.close
        return jsonify({'message': 'Se agrego con exito', 'content': data}), 201
    else:
        
        return jsonify({'message': 'Faltan valores'}), 400


@app.route('/cliente/traer')

def traer_clientes():
    cur = mysql.connection.cursor()
    cur.execute('SELECT *FROM CLIENTE')
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)



#traer un cliente segun su nombre o apellido

@app.route('/cliente/buscar/<string:palabra>')
def buscar_cliente(palabra):
    
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT *FROM CLIENTE WHERE nom_cli LIKE '%{palabra}%' OR ape_cli LIKE '%{palabra}%' ")
                
    data = cur.fetchall()
    cur.close()
    return jsonify(data)
    
  
@app.route('/clientesuper/agregar', methods = ['POST'])

def agregar_cliente():
    data = request.get_json()
    if(data.__contains__('id_cliente') and data.__contains__('id_super')):
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTP SUPER_CLI (id_cli, id_super) VALUES (%s,%s)", (data['id_cliente'], data['id_super'])")
        mysql.connection.commit()
        cur.close()
        
        return jsonify({
            
           return jsonify( 'message': 'Se inserto cliente y direccion correctamente)
            
        })
    else:
        return jsonify('message')
     


















#el puerto por deault de flask es 5000





app.run(debug = True)
