# Generated by Django 3.2.8 on 2022-06-05 19:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0006_auto_20220605_2355'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='qrcode_url',
            field=models.CharField(default=django.utils.timezone.now, max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='campaign',
            name='description',
            field=models.CharField(max_length=1000),
        ),
    ]
