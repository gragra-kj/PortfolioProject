from django.db import models
# Create your models here.

class Skill(models.Model):
    
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"

    LEVEL_CHOICES = [
        (BEGINNER, "Beginner"),
        (INTERMEDIATE, "Intermediate"),
        (ADVANCED, "Advanced"),
    ]

    # ---- CATEGORY CHOICES ----
    AWS = "AWS"
    BACKEND = "Backend"
    FRONTEND = "Frontend"
    IT_SUPPORT = "IT Support"

    CATEGORY_CHOICES = [
        (AWS, "AWS"),
        (BACKEND, "Backend"),
        (FRONTEND, "Frontend"),
        (IT_SUPPORT, "IT Support"),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default=AWS,
    )
    level = models.CharField(
        max_length=20,
        choices=LEVEL_CHOICES,
        default=BEGINNER,
    )

    
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
        