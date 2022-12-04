from django.contrib import admin
from .models import Banquet_halls
from .models import florist
from .models import catering
from .models import dj
from .models import lighting
from .models import photographer
# from .models import images


admin.site.register(Banquet_halls)
admin.site.register(florist)
admin.site.register(catering)

admin.site.register(dj)
admin.site.register(lighting)
admin.site.register(photographer)

# admin.site.register(images)

# Register your models here.
