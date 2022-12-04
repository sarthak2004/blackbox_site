from django.db import models


class Banquet_halls(models.Model):
    hallname = models.CharField(max_length=30)
    manager_name = models.CharField(max_length=20)
    Price = models.CharField(max_length=10)
    location = models.CharField(max_length=30)
    phone_number=models.CharField(max_length=10, default="0000000000")
    


    

    def __str__(self):
        return self.name



class florist(models.Model):

    florist_name=models.CharField(max_length=100)
    florist_price=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10, default="0000000000")

    def __str__(self):
        return self.name


class catering(models.Model):
    caterer_name=models.CharField(max_length=50)
    catering_price=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10, default="0000000000")

    def __str__(self):
        return self.name

 
class dj(models.Model):
    dj_name=models.CharField(max_length=50)
    dj_price=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10, default="0000000000")

    def __str__(self):
        return self.name


class lighting(models.Model):
    lighting_name=models.CharField(max_length=50)
    lighting_price=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10, default="0000000000")

    def __str__(self):
        return self.name



class photographer(models.Model):
    photographer_name=models.CharField(max_length=50)
    photographer_price=models.CharField(max_length=10)
    phone_number=models.CharField(max_length=10, default="0000000000")
   
    def __str__(self):
        return self.name


class images(models.Model):
    banquet_halls=models.ForeignKey(Banquet_halls, on_delete=models.CASCADE)
    image=models.ImageField(max_length=10)

    def __str__(self):
        return self.name





