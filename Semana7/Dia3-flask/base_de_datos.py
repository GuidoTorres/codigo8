from app import app
from flask_mysqldb import MySQL


app.config['MYSQL_HOST']= 'remotemysql.com'
app.config['MYSQL_USER'] = 'VxdgquuzUK'
app.config['MYSQL_PASSWORD'] = 'wwOpJYyvYr'
app.config['MYSQL_DB'] = 'VxdgquuzUK'

mysql = MySQL(app)