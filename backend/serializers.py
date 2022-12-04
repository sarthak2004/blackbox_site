from rest_framework import serializers
from backend.models import Banquet_halls
from backend.models import florist
from backend.models import catering
from backend.models import dj
from backend.models import lighting
from backend.models import photographer
# from backend.models import images


class BanquetHallSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banquet_halls
        fields = ['hallname', 'manager_name', 'Price', 'location',"phone_number"]


class FloristSerializer(serializers.ModelSerializer):
    class Meta:
        model = florist
        fields = ['florist_name','florist_price','phone_number']

class CateringSerializer(serializers.ModelSerializer):
    class Meta:
        model = catering
        fields = ['caterer_name', 'catering_price', 'phone_number']

class DjSerializer(serializers.ModelSerializer):
    class Meta:
        model = dj
        fields = ['dj_name', 'dj_price', 'phone_number']

class PhotographerSerializer(serializers.ModelSerializer):
    class Meta:
        model = photographer
        fields = ['photographer_name', 'photographer_price', 'phone_number']

class LightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = photographer
        fields = ['lighting_name', 'lighting_price', 'phone_number']
    # class Meta:
    #     model = images
    #     fields = ['images']



