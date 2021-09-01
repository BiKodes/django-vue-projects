from rest_framework.serializers import ModelSerializer
from .models import Wanafunzi

class WanafunziSerializer(ModelSerializer):
    class Meta:
        model = Wanafunzi
        fields = ['id', 'name', 'course', 'rating'] 