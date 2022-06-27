from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import Post

import json

# -------------------------------------------------

def index(request):
    context = {}
    template = loader.get_template('index.html')
    return HttpResponse(template.render(context))

# -------------------------------------------------

def list(request):
    data = Post.objects.all().values()
    # #convert to JSON string
    return HttpResponse( data[0]);

# -------------------------------------------------

# data = Post.objects.all().values()
# print(data)
# data_list = list(data)
# print(data_list)


# print(">>>>>>>>>>>>>>>>>>>>>>>")