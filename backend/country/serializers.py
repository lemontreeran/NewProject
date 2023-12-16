from rest_framework import serializers
from .models import Country


class CountrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Country
        fields = '__all__'


class CountryStatusUpdateSerializer(serializers.ModelSerializer):
    status = serializers.CharField(max_length=25)

    class Meta:
        model = Country
        fields = ['status']
