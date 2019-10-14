from django.shortcuts import render
from .models import Usuario
from rest_framework import viewsets
from .serializers import UsuarioSerializer
from rest_framework.permissions import IsAuthenticated

class UsuarioViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    permission_classes = (IsAuthenticated,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer