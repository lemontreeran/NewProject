
import json
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema
from .models import Country
from . import serializers
User = get_user_model()


class CountryView(generics.GenericAPIView):
    serializer_class = serializers.CountrySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        country = Country.objects.all().filter(created_by=request.user.id)
        serializer = self.serializer_class(instance=country, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        print("data, ", data)
        serializer = self.serializer_class(data=data)
        is_valid = serializer.is_valid()
        print("is_valid", is_valid)
        if is_valid:
            serializer.save(created_by=request.user.id)
            print("Data saved successfully")
        else:
            print("Data is not valid:", serializer.errors)
        print(f"\n111 The post data is {serializer.data}")
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class CountryIdView(generics.GenericAPIView):
    serializer_class = serializers.CountrySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, Country_id):
        Country = get_object_or_404(Country, pk=Country_id)
        # scanid = request.GET.get('scanId', '')
        # print("scanid", scanid)
        # scaninfo_main(scanid)
        serializer = self.serializer_class(instance=Country)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, Country_id):

        Country = get_object_or_404(Country, pk=Country_id)

        serializer = self.serializer_class(
            instance=Country, data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, Country_id):

        Country = get_object_or_404(Country, id=Country_id)

        Country.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UpdateCountryStatusView(generics.GenericAPIView):

    serializer_class = serializers.CountryStatusUpdateSerializer

    def put(self, request, Country_id):
        Country = get_object_or_404(Country, pk=Country_id)

        serializer = self.serializer_class(
            instance=Country, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(status=status.HTTP_200_OK, data=serializer.data)

        return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)


class UserCountrysView(generics.GenericAPIView):
    serializer_class = serializers.CountrySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):

        Countrys = Country.objects.all().filter(organiser_id=user_id)

        serializer = self.serializer_class(instance=Countrys, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserCountryDetailView(generics.GenericAPIView):
    serializer_class = serializers.CountrySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id, Country_id):
        user = User.objects.get(pk=user_id)

        Country = Country.objects.all().filter(
            organiser_id=user).filter(pk=Country_id)

        serializer = self.serializer_class(instance=Country)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
