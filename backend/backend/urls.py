from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Decarbonify",
        default_version="v1",
        description="This is a REST API for the Decarbonify platform",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('account/', include('account.urls')),
    path('country/', include('country.urls')),
    path('company/', include('company.urls')),
    path("", schema_view.with_ui("swagger", cache_timeout=0)),
]
