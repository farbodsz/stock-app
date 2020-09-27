from django.shortcuts import render

from rest_framework import viewsets , permissions

from .models import Balance, Stock, User
from .serializers import BalanceSerializer, StockSerializer, UserSerializer


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class BalanceView(viewsets.ModelViewSet):
    serializer_class = BalanceSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return self.request.user.balance.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

class StockView(viewsets.ModelViewSet):
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return self.request.user.stock.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
