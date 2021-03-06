from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Producto, Categoria
# https://www.django-rest-framework.org/api-guide/status-codes/
from rest_framework import status
from .serializers import ProductoSerializer, CategoriaSerializer


class ListaProducto(APIView):
    serializer_class = ProductoSerializer

    def get(self,request,format=None):
        productos = Producto.objects.all()
        data = ProductoSerializer(productos,many=True).data
        print(data)
        return Response({
            'message':'Ok',
            'content': data
            }, status = status.HTTP_200_OK)
        
class ProductoDetalle(APIView):
    def get(self,request, pk):
        
        producto = get_object_or_404(Producto, pk=pk)
        data = ProductoSerializer(producto, many= False).data
        return Response({
            'message': 'ok',
            'content': data
        })
        
    def post(self,request,format=None):
        serializador = ProductoSerializer(data=request.data)
        # el serializador tiene un metodo llamado is_valid que valida si toda la data esta ingresada correctamente
        # el serializador tiene un metodo llamado error que nos va a devolver el error que falta para que se cumpla el serializador
        if serializador.is_valid():
            serializador.save()
            print(serializador.validated_data)
            # Vlidated_data => nos devuelve la data validada en nuestro serializador, solamente la que nosotros pasamos
            # data => nos devuelve todo el objeto creado, inclusive los campos que no hemos estipulado, como el id y el estado vendido
            return Response({
                
               'message': 'ok',
               'content': {
                   'id': serializador.data["prod_id"],
                   'nombre': serializador.data["prod_desc"],
                   'vendido':serializador.data["prod_vendido"]
               }
            })
            
        
        else:
            return Response(serializador.errors,status=status.HTTP_400_BAD_REQUEST)
        
        
class CategoriaURL(APIView):
    def get(self, request,pk, format= None):
        try:
            
            categoria = Categoria.objects.get(cat_id=pk)
            if categoria:
                print(categoria.subcategoria_set.all()[0].producto_set.all()[1])
                return Response({
                    'message': 'ok',
                    'content': {
                        'id': categoria.cat_id,
                        'nombre': categoria.cat_descripcion
                    }
                })
        except:
            
            
            return Response({
                'message':'Error',
                'content': {
                'No se encontro esa categoria'
                    }
                })
            
    def post(self,request,format=None):
        
        data = request.data
        categoria = Categoria.objects.create(cat_descripcion = data['descripcion'])
        categoria.save()
        return Response({
            'message': 'ok',
            'contenido': 'Categoria creada exitosamente',
            'categoria':{
                'id': categoria.cat_id,
                'descripcion': categoria.cat_descripcion
            }
        }, status=201)
        
        
        
        # serializador = CategoriaSerializer(data=request.data)
        # # el serializador tiene un metodo llamado is_valid que valida si toda la data esta ingresada correctamente
        # # el serializador tiene un metodo llamado error que nos va a devolver el error que falta para que se cumpla el serializador
        # if serializador.is_valid():
        #     serializador.save()
        #     print(serializador.validated_data)
        #     # Vlidated_data => nos devuelve la data validada en nuestro serializador, solamente la que nosotros pasamos
        #     # data => nos devuelve todo el objeto creado, inclusive los campos que no hemos estipulado, como el id y el estado vendido
        #     return Response({
                
        #        'message': 'ok',
        #        'content': {
        #            'descripcion': serializador.data["cat_descripcion"],
        #        }
        #     })
            
        
        # else:
        #     return Response(serializador.errors,status=status.HTTP_400_BAD_REQUEST)
        
        
