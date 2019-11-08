
from flask import Flask

#__name__ sirve para definir que nuestra apliacacion flask se va a ejecutar en el hilo principal

app = Flask(__name__)


#Esto es un decorador de la funcion route y siempre despues de un decorador va una funcion para decir que es lo q va a hacer
@app.route('/')


def inicio():
    
    return 'Estoy vivo'


#Para el mode de desarrollo debug = true, esto hara que cualquier cambio que la aplicacion se reinicie, x default esta en false
app.run(port=5000, debug=True)