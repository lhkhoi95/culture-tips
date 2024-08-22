from django.db import models


class Culture(models.Model):
    title = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    country_code = models.CharField(max_length=5)
    description = models.TextField()
    flag_url = models.CharField(max_length=200)

    def __str__(self):
        return self.title
