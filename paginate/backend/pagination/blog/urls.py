from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.PostViewSet, basename='posts')

urlpatterns = router.urls

# urlpatterns = [
#     path('', views.index, name='index'),
# ]


# from rest_framework import routers


# router = routers.DefaultRouter()
# router.register('wanafunzi', WanafunziViewSet)

# urlpatterns = router.urls
