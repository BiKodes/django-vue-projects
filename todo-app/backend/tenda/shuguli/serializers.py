from rest_framework import serializers
from  .models import Shuguli


class ShuguliSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shuguli
        fields = ('id', 'description', 'status')