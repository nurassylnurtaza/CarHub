# Generated by Django 5.0.4 on 2024-04-25 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
