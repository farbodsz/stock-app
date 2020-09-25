from django.contrib import admin
from django.contrib.auth.models import User
from .models import Balance, Stock


class UserAdmin(admin.ModelAdmin):
    list_display = ("username",)


class BalanceAdmin(admin.ModelAdmin):
    list_display = ("owner", "balance")


class StockAdmin(admin.ModelAdmin):
    list_display = ("owner", "stock_id", "amount")


admin.site.register(Balance, BalanceAdmin)
admin.site.register(Stock, StockAdmin)
