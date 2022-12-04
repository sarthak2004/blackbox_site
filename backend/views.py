# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Banquet_halls
from .serializers import *

@api_view(['GET'])
def banquet_halls_list(request):
    data = Banquet_halls.objects.all()

    serializer  = BanquetHallSerializer(data, context={'request': request}, many=True)

    print(serializer.data)
    return Response(serializer.data)