from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from service.models import Comment
from service.permissions import IsOwner
from service.serializers import CommentSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().select_related("user")
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, IsOwner)
