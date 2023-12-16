from django.urls import path
from . import views

urlpatterns = [
    path('', views.CompanyView.as_view(), name='Companys'),
    path('<int:Company_id>/', views.CompanyIdView.as_view(), name='Company'),

    path('update-status/<int:Company_id>/',
         views.UpdateCompanyStatusView.as_view(), name='update_Company_status'),
    path('user/<int:user_id>/Companys',
         views.UserCompanysView.as_view(), name='users_Company'),
    path('user/<int:user_id>/Company/<int:Company_id>/',
         views.UserCompanyDetailView.as_view(), name='user_Company_detail'),
]
