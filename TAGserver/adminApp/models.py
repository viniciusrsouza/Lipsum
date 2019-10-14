from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    afiliacao = models.CharField(max_length=200)
    departamento = models.CharField(max_length=200)
    formacao = models.CharField(max_length=200)
    linkLates = models.CharField(max_length=300)

    def __str__(self):
        return self.nome