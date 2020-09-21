from django.db import models


class User(models.Model):
    user_id = models.IntegerField()
    username = models.CharField(max_length=20)

    def __str__(self):
        return self.username


class Balance(models.Model):
    """Stores the user's current capital - i.e. money they can buy stocks with,
    not the value of their stocks.
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # Balance stored in cents not dollars
    balance = models.BigIntegerField()

    def __str__(self):
        return f"{self.user_id}: {self.balance}"


class Stock(models.Model):
    """One of the user's currently owned stocks."""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stock_id = models.CharField(max_length=5)
    amount = models.IntegerField()

    def __str__(self):
        return f"{user}, {stock_id}, {amount}"
