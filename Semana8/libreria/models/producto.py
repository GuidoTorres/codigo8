from db import db

class ProductoModel(db.Model):
    __tablename__="t_producto"
    id=db.Column("prod_id",db.Integer,primary_key=True)
    desc=db.Column("prod_des",db.String(50))
    
        # Se crea la realcion de uno a muchos
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