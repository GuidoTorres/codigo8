class Restaurant():
    
    def __init__(self, restaurant_name, cuisine_type):
        
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type
        
    def describe_restaurant(self):
        
        print("""
        El nombre del restaurant es: {}
        el tipo de cocina que maneja es: {}""".format(self.restaurant_name, self.cuisine_type))
        
        
    def open_restaurant(self):
        
        print("""
        El Restaurante se encuentra abierto""")
        
class Users():
    
    def __init__(self, first_name, last_name, dni):
    
        self.first_name = first_name
        self.last_name = last_name
        self.dni = dni
        
        
        
    def describe_user(self):
        
        print("""
    ************El nombre del cliente es : {}
    ************El apellido del cliente es : {}
    ************El dni del cliente es : {}
                  """ .format(self.first_name, self.last_name, self.dni))
        
    def greet_user(self):
        
        print("Bienvenido {} {}, esperamos que la comida sea de tu agrado :-) ".format(self.first_name, self.last_name))
        
        
rest1 = Restaurant("Camaroncito", "Cocina Marina")
rest1.describe_restaurant()  
rest1.open_restaurant()

rest2 = Restaurant("La italiana", "Comida Italiana")
rest2.describe_restaurant()  
rest2.open_restaurant()


# cliente1 = Users("Guido", "Torres", 72798529)
# cliente1.describe_user()    
# cliente1.greet_user()

# cliente2 = Users("Francisco", "Alarcon", 30402314)
# cliente2.describe_user()    
# cliente2.greet_user()