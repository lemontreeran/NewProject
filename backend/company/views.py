
import json
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema
from .models import Company
from . import serializers
User = get_user_model()


class CompanyView(generics.GenericAPIView):
    serializer_class = serializers.CompanySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        company = Company.objects.all().filter(created_by=1)
        serializer = self.serializer_class(instance=company, many=True)
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


class CompanyIdView(generics.GenericAPIView):
    serializer_class = serializers.CompanySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, Company_id):
        Company = get_object_or_404(Company, pk=Company_id)
        # scanid = request.GET.get('scanId', '')
        # print("scanid", scanid)
        # scaninfo_main(scanid)
        serializer = self.serializer_class(instance=Company)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, Company_id):

        Company = get_object_or_404(Company, pk=Company_id)

        serializer = self.serializer_class(
            instance=Company, data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, Company_id):

        Company = get_object_or_404(Company, id=Company_id)

        Company.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UpdateCompanyStatusView(generics.GenericAPIView):

    serializer_class = serializers.CompanyStatusUpdateSerializer

    def put(self, request, Company_id):
        Company = get_object_or_404(Company, pk=Company_id)

        serializer = self.serializer_class(
            instance=Company, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(status=status.HTTP_200_OK, data=serializer.data)

        return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)


class UserCompanysView(generics.GenericAPIView):
    serializer_class = serializers.CompanySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):

        Companys = Company.objects.all().filter(organiser_id=user_id)

        serializer = self.serializer_class(instance=Companys, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserCompanyDetailView(generics.GenericAPIView):
    serializer_class = serializers.CompanySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id, Company_id):
        user = User.objects.get(pk=user_id)

        Company = Company.objects.all().filter(
            organiser_id=user).filter(pk=Company_id)

        serializer = self.serializer_class(instance=Company)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
