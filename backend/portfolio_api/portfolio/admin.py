from django.contrib import admin

# Register your models here.
#from django.contrib import admin
from .models import Skill, Project, Experience

admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Experience)

