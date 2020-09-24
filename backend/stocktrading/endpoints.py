from .api import RegistrationAPI , LoginAPI,UserAPI
from django.conf.urls import include, url
from rest_framework import routers

urlpatterns = [
    url("auth/register/", RegistrationAPI.as_view()),
    url("auth/login/$", LoginAPI.as_view()),
    url("auth/user/$", UserAPI.as_view()),
]
