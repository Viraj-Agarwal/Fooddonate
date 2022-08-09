from django.db import models

# Create your models here.
class Covid(models.Model):
    name: models.CharField
    long: models.IntegerField
    lat: models.IntegerField
    
