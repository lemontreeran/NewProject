from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100)
    images = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)
    credits = models.IntegerField(default=0)
    status = models.CharField(max_length=100, default="Pending")

    country_id = models.IntegerField(default=0)
    created_by = models.IntegerField(default=0)
