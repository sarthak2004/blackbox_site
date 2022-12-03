from rest_framework import serializers
from backend.models import Banquet_halls

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banquet_halls
        fields = ['hallname', 'manager', 'Price', 'location']
