# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializers import *

@api_view(['GET'])
def banquet_halls_list(request):
    data = Banquet_halls.objects.all()

    serializer  = BanquetHallSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def florist_list(request):
    data = florist.objects.all()

    serializer  = FloristSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def catering_list(request):
    data = catering.objects.all()

    serializer  = CateringSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def dj_list(request):
    data = dj.objects.all()

    serializer  = DjSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def lighting_list(request):
    data = lighting.objects.all()

    serializer  = LightingSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def photographer_list(request):
    data = photographer.objects.all()

    serializer  = PhotographerSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)



