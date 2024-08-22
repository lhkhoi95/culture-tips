from django.db import models


class Culture(models.Model):
    title = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
