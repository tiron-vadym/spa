from rest_framework import serializers

from service.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            "id",
            "user",
            "text",
            "created_at",
        ]
