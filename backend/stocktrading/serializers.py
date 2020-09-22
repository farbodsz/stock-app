from rest_framework import serializers

from .models import Balance, Stock, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username",)


class BalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Balance
        fields = ("user", "balance")


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ("user", "stock_id", "amount")
