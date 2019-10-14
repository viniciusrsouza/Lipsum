from .models import Usuario
from rest_framework import serializers

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nome','email','senha','afiliacao','departamento','formacao','linkLates']
    