from django.db import models

class Banquet_halls(models.Model):
    hallname = models.CharField(max_length=30)
    manager = models.CharField(max_length=20)
    Price = models.IntegerField()
    location = models.CharField(max_length=30)
