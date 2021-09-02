from django.urls import path
# from rest_framework.routers import DefaultRouter
from blog import views


# router = DefaultRouter()
# router.register('blog', posts, basename='posts')

# urlpatterns = router.urls



urlpatterns = [
    path('get_posts/', views.posts, name='posts')
]