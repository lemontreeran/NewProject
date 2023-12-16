from django.db import models

# Create your models here.
from django.db import models

# Create your models here.


class Country(models.Model):
    name = models.CharField(max_length=100)
    images = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)
    credits = models.IntegerField(default=100)
    companies = models.IntegerField(default=0)
    public_key = models.CharField(max_length=1000)
    created_by = models.IntegerField(default=0)
