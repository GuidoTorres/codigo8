from flask import Flask, jsonify, request

from flask_mysqldb import MySQL

app = Flask(__name__)

#credenciales de mysql

app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'colegio'

#Creamos una variabel de tipo mysql y le mandamos la configuracion

mysql = MySQL(app)

@app.route('/colegio/traer/<string:palabra>')

def traer(palabra):
    cur = mysql.connection.cursor()
    cur.execute(f"select M.mat_nivel, E.est_cod, E.est_dni, E.est_nombres, E.est_ape_pat, E.est_ape_mat, E.est_fecha_nacimiento, E.est_sexo from matricula as M inner join estudiante as E on M.mat_id = E.id_mat where mat_nivel = '{palabra}' ")
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)



@app.route('/colegio/turnos/')

def contar():
    cur = mysql.connection.cursor()
    cur.execute(f"select count(mat_turno), mat_turno from matricula group by mat_turno")
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)


@app.route('/lista/agregar', methods=['POST'])
def agregar_lista():
    info = request.get_json()
    if(info['nombre']):
        # Crea conexioncon base de datos
        cur = mysql.connection.cursor()
        print('Ok')
        print(info['nombre'])
        query="INSERT INTO LISTA (lista_nombre) VALUES ('{}')".format(info['nombre'])
        cur.execute(query)
        mysql.connection.commit()
        cur.close
        
        # conevertir string a json = jsnoify
        return jsonify({'message': 'Se agrego con exito', 'content': info})
    else:
        
        return jsonify({'message': 'Faltan valores'})
    

@app.route('/colegio/traer_lista/')

def traer_lista():
    cur = mysql.connection.cursor()
    cur.execute("SELECT *from lista")
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)


@app.route('/lista/agregarvoto', methods=['POST'])
def agregar_voto():
    info = request.get_json()
    if(info['id'] and info['lista'] and info['fecha']):
        # Crea conexioncon base de datos
        cur = mysql.connection.cursor()
        print(info)
        query="INSERT INTO VOTO ( est_id,lista_id , lista_fecha) VALUES ({0},{1},'{2}')".format(info['id'],info['lista'],info['fecha'])
        cur.execute(query)
        mysql.connection.commit()
        cur.close()
        
        # conevertir string a json = jsnoify
        return jsonify({'message': 'Se agrego con exito', 'content': info})
    else:
        
        return jsonify({'message': 'Faltan valores'})
    
    
@app.route('/lista/mostrarvotos/')

def mostrar_votos():
    cur = mysql.connection.cursor()
    cur.execute("SELECT *from voto")
    data = cur.fetchall()
    cur.close()
    print(data)
    
    return jsonify(data)
    
    
app.run(debug = True)   
