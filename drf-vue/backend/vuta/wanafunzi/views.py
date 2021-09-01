from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Wanafunzi
from .serializers import WanafunziSerializer 


class WanafunziViewSet(ModelViewSet):
    queryset = Wanafunzi.objects.all()
    serializer_class = WanafunziSerializer
