from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Culture
from .serializers import CultureSerializer


@api_view(['POST'])
def add_culture(request):
    serializer = CultureSerializer(data=request.data)
    if serializer.is_valid():
        # Check if id exists for update
        culture_id = request.data.get('id')
        if culture_id:
            try:
                culture = Culture.objects.get(id=culture_id)
                serializer.update(culture, serializer.validated_data)
            except Culture.DoesNotExist:
                return Response({"error": "Culture not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_culture(request, pk):
    try:
        culture = Culture.objects.get(pk=pk)
    except Culture.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    culture.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_cultures(request):
    cultures = Culture.objects.all()
    serializer = CultureSerializer(cultures, many=True)
    return Response(serializer.data)
