from django.urls import path
from . import views

urlpatterns = [
    path('', views.CountryView.as_view(), name='Countrys'),
    path('<int:Country_id>/', views.CountryIdView.as_view(), name='Country'),

    path('update-status/<int:Country_id>/',
         views.UpdateCountryStatusView.as_view(), name='update_Country_status'),
    path('user/<int:user_id>/Countrys',
         views.UserCountrysView.as_view(), name='users_Country'),
    path('user/<int:user_id>/Country/<int:Country_id>/',
         views.UserCountryDetailView.as_view(), name='user_Country_detail'),
]
