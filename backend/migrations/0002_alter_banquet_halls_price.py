# Generated by Django 4.1.3 on 2022-12-03 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banquet_halls',
            name='Price',
            field=models.IntegerField(),
        ),
    ]
