from django.db import models
from django.utils.translation import gettext_lazy as _

class Banquethall(models.Model):
    name=models.CharField(_("HAllname"),max_length=100,unique=False,blank=False)
    manager_name=models.CharField(_("Manager name"),max_length=100,unique=False,blank=False)
    approxprice=models.IntegerField(_("approx price"),max_length=100,unique=False,blank=False)
    adress=models.TextField(_("Adrdress"),max_length=500,blank=False)
    
    email=models.EmailField(_("email"))

    def __str__(self):
        return self.name



    