from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'reserva'

mysql = MySQL(app)


# VAMOS A HACER UN SISTEMA DE RESERVA DE AULAS, EN LA CUAL RESERVEMOS EL AULA SELECCIONADA PRIMERO POR EL PABELLON , LUEGO
@app.before_first_request
def inicializar_tablas():
    cursor = mysql.connection.cursor()
    crear_tablas = """     
    CREATE TABLE IF NOT EXISTS T_PLAYA(
        PLAYA_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        PLAYA_NOM VARCHAR(45),
        PLAYA_LAT DECIMAL(10,2),
        PLAYA_LONG DECIMAL(10,2),
        PLAYA_DIR VARCHAR(45));
           
    CREATE TABLE IF  NOT EXISTS T_SLOTPLAYA(
        SLOT_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        SLOT_NRO INT,
        SLOT_ESTADO BOOLEAN,
        PLAYA_ID INT,
        FOREIGN KEY (PLAYA_ID) REFERENCES T_PLAYA(PLAYA_ID) );
          
    CREATE TABLE IF NOT EXISTS T_USUARIO(
        USU_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        USU_EMAIL VARCHAR(45),
        USU_HASH TEXT,
        USU_SALT TEXT,
        USU_ROL VARCHAR(10),
        USU_NOM VARCHAR(30),
        USU_APE VARCHAR(45),
        USU_FONO VARCHAR(15));
               
    CREATE TABLE IF NOT EXISTS T_TIPOVEHICULO(
        
        TIPO_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        TIPO_NOMBRE VARCHAR(45),
        TIPO_PRECIO DECIMAL(3,2)
    );
    
    CREATE TABLE IF NOT EXISTS T_RESERVA(
        RES_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        RES_FECHIN DATETIME,
        RES_FECHFIN DATETIME,
        RES_EST BOOLEAN,
        RES_MONTO DECIMAL(5,2),
        RES_PLACA VARCHAR(10),
        USU_ID INT,
        SLOT_ID INT,
        TIPO_ID INT,
        FOREIGN KEY(USU_ID) REFERENCES T_USUARIO(USU_ID),
        FOREIGN KEY(SLOT_ID) REFERENCES T_SLOTPLAYA(SLOT_ID),
        FOREIGN KEY(TIPO_ID) REFERENCES T_TIPOVEHICULO(TIPO_ID));
    """

    cursor.execute(crear_tablas)
    cursor.close()