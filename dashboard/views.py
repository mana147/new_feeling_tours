from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import Post

import json

# -------------------------------------------------

def index(request):
    context = {}
    template = loader.get_template('index.html')
    return HttpResponse(template.render(context, request))

# -------------------------------------------------

def list(request):
    data = Post.objects.all().values()
    # #convert to JSON string
    return HttpResponse( data[0]);
