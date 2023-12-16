from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'


class CompanyStatusUpdateSerializer(serializers.ModelSerializer):
    status = serializers.CharField(max_length=25)

    class Meta:
        model = Company
        fields = ['status']
