from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("dashboard");

def chat(request):
    return render(request, 'chat.html')

def chat_room(request, room_name):
    return render(request, 'room.html', {"room_name": room_name})