from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path(r'^.*\.html', views.gentella_html, name='gentella'),
    
    # The home page
    path('', views.index, name='index'),
]
