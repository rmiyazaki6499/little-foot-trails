from django.db import models
from trail.models import Trail
from django.conf import settings


class Review(models.Model):
    name = models.CharField(max_length=30)
    review = models.CharField(max_length=1250)
    stars = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    trail = models.ForeignKey(Trail, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
