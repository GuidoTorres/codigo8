from django.urls import path
from .views import ListaProducto, ProductoDetalle,CategoriaURL

urlpatterns=[
    path('v1/productos/',ListaProducto.as_view(), name= "Lista de productos"),
    path('v1/productos/<int:pk>', ProductoDetalle.as_view()),
    path('v1/productos/add', ProductoDetalle.as_view()),
    path('v1/categoria/<int:pk>', CategoriaURL.as_view()),
    path('v1/categoria/add',CategoriaURL.as_view())
]