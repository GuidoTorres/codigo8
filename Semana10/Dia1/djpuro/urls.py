# Libreria para especificar las rutas
from django.urls import path
from .views import lista_categoria, categoria_id, agregarCategoria, actualizarCategoria
# En esta varaible se almacenan todas las rutas de la aplicaion
urlpatterns =[
    
    path('categorias/', lista_categoria, name="Lista de categorias"),
    path('categorias/<int:pk>', categoria_id),
    path('categorias/add', agregarCategoria),
    path('categorias/update/<int:pk>', actualizarCategoria)

    

    
]