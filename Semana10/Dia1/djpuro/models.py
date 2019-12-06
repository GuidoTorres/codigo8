from django.db import models

# Create your models here.
class CategoriaModel(models.Model):
    # definimos atributos de nuestra tabla
    # Si no definimos la pk se va a crear automaticamente en la tabla con el nombre id y toda las configuraciones como auto_increment, not null , etc.
    id_categoria = models.AutoField(auto_created=True, unique= True, primary_key= True, null=False)
    descripcion = models.CharField(max_length= 100) #varchar (100)
    activo = models.BooleanField(default= True)
    
    def __str__(self):
        """Para convertir el objeto creado a un string"""
        return '{}'.format(self.descripcion)
    
    
    #Si queremos modificar otros datos(Nombre de la tabla)
    
    class Meta:
        # Cambiar el nombre de la tabla
        db_table = "t_categoria"
        # Cambiar denominacion de la tabla a plural
        verbose_name_plural = "Categorias"
        