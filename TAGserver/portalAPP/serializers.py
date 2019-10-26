from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        #fields = '__all__'
        fields = ['email', 'password', 'nome', 'afiliacao', 'departamento', 'formacao', 'link_lates']

