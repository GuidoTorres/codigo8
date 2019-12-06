from db import db

class VehiculoModel(db.Model):
    __tablename__="t_vehiculo"
    id=db.Column("vehiculo_id",db.Integer,primary_key=True)
    marca=db.Column("marca_vehiculo",db.String(50))
    modelo=db.Column("modelo_vehiculo",db.String(50))

    
    #  Se crea la realcion de uno a muchos
    cat_id = db.Column(db.Integer, db.ForeignKey('t_categoria.cat_id'), nullable=False)
    categoria = db.relationship('CategoriaModel')

    def __init__(self,descripcion, id_cat):
        
        self.desc=descripcion
        self.cat_id = id_cat
        
    def devolverjson(self):
        return{
            'id':self.id,
            'descripcion' : self.desc
        }
    def guardar_en_bd(self):
        db.session.add(self)
        db.session.commit()