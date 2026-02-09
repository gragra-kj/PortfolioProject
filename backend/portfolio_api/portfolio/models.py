from django.db import models
# Create your models here.

class Skill(models.Model):
    name=models.CharField(max_length=100)
    level=models.CharField(max_length=20)
    
    def __str__(self):
        return self.name
    
class Project(models.Model):
    title=models.CharField(max_length=500)
    description=models.TextField()
    tech=models.CharField(max_length=250)
    github_urs=models.URLField()
    live_urls=models.URLField(blank=True)
    image=models.URLField()
    
    def __str__(self):
        return self.title
    
class Experience(models.Model):
    role=models.CharField(max_length=500)
    company=models.CharField(max_length=500)
    start_date=models.CharField(max_length=200)
    end_date=models.CharField()
    description=models.TextField()
    
    def __str__(self):
        return f"{self.role} at {self.company}"
        