from django.contrib import admin

from .models import Balance, Stock, User


class UserAdmin(admin.ModelAdmin):
    list_display = ("username",)


class BalanceAdmin(admin.ModelAdmin):
    list_display = ("user", "balance")


class StockAdmin(admin.ModelAdmin):
    list_display = ("user", "stock_id", "amount")


admin.site.register(User, UserAdmin)
admin.site.register(Balance, BalanceAdmin)
admin.site.register(Stock, StockAdmin)
