from django.db import models
from django.utils.translation import gettext_lazy as gl

class Banquet_halls(models.Model):
    hallname = models.CharField(gl("hallname"),max_length=30)
    manager_name = models.CharField(gl("manager_name"), max_length=20)
    Price = models.CharField(gl("Price"), max_length=10)
    location = models.CharField(gl("location"), max_length=30)
    phone_number=models.CharField(gl("phone_number"), max_length=10, default="0000000000")
    
class florist(models.Model):

    florist_name=models.CharField(gl("florist_name"),max_length=100)
    florist_price=models.CharField(gl("florist_price"),max_length=10)
    phone_number=models.CharField(gl("phone_number"),max_length=10, default="0000000000")

class catering(models.Model):
    caterer_name=models.CharField(gl("caterer_name"),max_length=50)
    catering_price=models.CharField(gl("catering_price"),max_length=10)
    phone_number=models.CharField(gl("phone_number"),max_length=10, default="0000000000")


 
class dj(models.Model):
    dj_name=models.CharField(gl("dj_name"),max_length=50)
    dj_price=models.CharField(gl("dj_price"),max_length=10)
    phone_number=models.CharField(gl("phone_number"),max_length=10, default="0000000000")


class lighting(models.Model):
    lighting_name=models.CharField(gl("lighting_name"),max_length=50)
    lighting_price=models.CharField(gl("lighting_price"),max_length=10)
    phone_number=models.CharField(gl("phone_number"),max_length=10, default="0000000000")



class photographer(models.Model):
    photographer_name=models.CharField(gl("photgrapher_name"),max_length=50)
    photographer_price=models.CharField(gl("photographer_price"),max_length=10)
    phone_number=models.CharField(gl("phone_number"),max_length=10, default="0000000000")
   
# class images(models.Model):
#     banquet_halls=models.ForeignKey(Banquet_halls, on_delete=models.CASCADE)
#     image=models.ImageField(max_length=10)




