from django.shortcuts import render
from .models import Shuguli
from .serializers import ShuguliSerializer

from rest_framework import viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class ShuguliViewSet(viewsets.ModelViewSet):
    authentication_class = (BasicAuthentication)
    permission_class = (IsAuthenticated)
    queryset = Shuguli.objects.all()
    serializer_class = ShuguliSerializer
