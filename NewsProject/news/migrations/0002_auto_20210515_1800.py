# Generated by Django 3.1.6 on 2021-05-15 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='paddress',
            field=models.CharField(default=' ', max_length=200),
        ),
        migrations.AlterField(
            model_name='contact',
            name='PFirstName',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='contact',
            name='pLastName',
            field=models.CharField(max_length=50),
        ),
    ]
