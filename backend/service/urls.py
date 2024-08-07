from django.urls import path, include
from rest_framework import routers

from service.views import CommentViewSet

router = routers.DefaultRouter()
router.register("comments", CommentViewSet)

urlpatterns = [path("", include(router.urls))]

app_name = "service"
