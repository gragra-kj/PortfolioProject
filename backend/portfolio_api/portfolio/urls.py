from django.urls import path

from .views import SkillListViews,ProjectListView,ExperienceListView

urlpatterns = [
    path("skills/",SkillListViews.as_view(),name="skill"),
    path("projects/",ProjectListView.as_view,name="projects" ),
    path("experience/", ExperienceListView.as_view,name="experience")
]
