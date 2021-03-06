from django.db import models


class Tag(models.Model):
    """The Tag model is an Amenity for each Trail

    Arguments:
        models {Model} -- Django builtin Model
    """
    name = models.CharField(max_length=30)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
