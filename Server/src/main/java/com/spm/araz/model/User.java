package com.spm.araz.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@Document("User")
public class User {
    @Id
    private String id;
    private ArrayList<Payment> payments;
    private Cart cart;
    private int loyaltyPoint;

    private String name;
    private String email;
    private String password;
    private String userType;
    private int contactNo;
    private String address;
    private String gender;
    private String dob;

    public User(String id, String name, String email, String password, String userType, int contactNo, String address, String gender, String dob) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.contactNo = contactNo;
        this.address = address;
        this.gender = gender;
        this.dob = dob;
        this.payments = new ArrayList<>();
    }

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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getContactNo() {
        return contactNo;
    }

    public void setContactNo(int contactNo) {
        this.contactNo = contactNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}