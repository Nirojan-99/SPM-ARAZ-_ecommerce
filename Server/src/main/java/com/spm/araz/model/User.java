package com.spm.araz.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@Document("Product")
public class User {
    @Id
    private String id;
    private ArrayList<Payment> payments;
    private Cart cart;
    private int loyaltyPoint;

    public User() {
        payments = new ArrayList<>();
    }

    public ArrayList<Payment> getPayments() {
        return payments;
    }

    public void addPayment(Payment payment) {
        payments.add(payment);
    }

    public void removePayment(int cardNumber) {
        for (Payment payment : payments) {
            if (payment.getCardNumber() == cardNumber) {
                payments.remove(payment);
            }
        }
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public int getLoyaltyPoint() {
        return loyaltyPoint;
    }

    public void setLoyaltyPoint(int loyaltyPoint) {
        this.loyaltyPoint = loyaltyPoint;
    }
}