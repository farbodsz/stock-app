from django.db import models
from django.contrib.auth.models import User


class Balance(models.Model):
    """Stores the user's current capital - i.e. money they can buy stocks with,
    not the value of their stocks.
    """

    owner = models.ForeignKey(User, related_name="balance", on_delete=models.CASCADE, null=True)

    # Balance stored in cents not dollars
    balance = models.BigIntegerField()

    def __str__(self):
        return str(self.balance)


class Stock(models.Model):
    """One of the user's currently owned stocks."""

    owner = models.ForeignKey(User, related_name="stock", on_delete=models.CASCADE, null=True)
    stock_id = models.CharField(max_length=5)
    amount = models.IntegerField()

    def __str__(self):
        return self.stock_id
