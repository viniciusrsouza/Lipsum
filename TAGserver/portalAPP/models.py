from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.permissions import IsAuthenticated
from .managers import CustomUserManager

class Usuario (AbstractUser):
    username = None
    first_name = None
    last_name = None

    email = models.EmailField(('email address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    #permission_classes = (IsAuthenticated,)
    objects = CustomUserManager()

    nome = models.CharField(max_length=200)
    afiliacao = models.CharField(max_length=200)
    departamento = models.CharField(max_length=200)
    formacao = models.CharField(max_length=200)
    link_lates = models.CharField(max_length=300)

    def __str__(self):
        return self.email
