from rest_framework import serializers
from backend.models import Banquet_halls
from backend.models import florist
from backend.models import catering
from backend.models import dj
from backend.models import lighting
from backend.models import photographer
from backend.models import images


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banquet_halls
        fields = ['hallname', 'manager_name', 'Price', 'location',"phone_number"]


    class Meta:
        model = florist
        fields = ['florist_name','florist_price','phone_number']

    class Meta:
        model = catering
        fields = ['caterer_name', 'catering_price', 'phone_number']
    class Meta:
        model = dj
        fields = ['dj_name', 'dj_price', 'phone_number']


    class Meta:
        model = photographer
        fields = ['photographer_name', 'photographer_price', 'phone_number']

    class Meta:
        model = images
        fields = ['images']



