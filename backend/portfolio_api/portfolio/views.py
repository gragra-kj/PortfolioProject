from django.shortcuts import render

# Create your views here.
from .serializers import SkillSerializer,ProjectSerializers,ExperienceSerializer
from .models import Skill,Project,Experience
from rest_framework import generics


class SkillListViews(generics.ListAPIView):
    queryset=Skill.objects.all()
    serializer_class=SkillSerializer
    
    
class ProjectListView(generics.ListAPIView):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializers
    
class ExperienceListView(generics.ListAPIView):
    queryset=Experience.objects.all()
    serializer_class=ExperienceSerializer
            

