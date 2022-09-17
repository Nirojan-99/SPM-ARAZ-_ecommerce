package com.spm.araz.model;

import com.mongodb.internal.connection.Time;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;

@Data
@NoArgsConstructor
@Document("Order")
public class Order {
    @Id
   private String id;
    private String userId;
    private String total;
    private boolean orderStatus;
    private boolean payment;
    private Address address;
    private Product product;
    private Date date;
    private Time time;

    public Order(String id, String userId, String total, boolean orderStatus, boolean payment, Address address, Product product, Date date, Time time) {
        this.id = id;
        this.userId = userId;
        this.total = total;
        this.orderStatus = orderStatus;
        this.payment = payment;
        this.address = address;
        this.product = product;
        this.date = date;
        this.time = time;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public boolean isOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(boolean orderStatus) {
        this.orderStatus = orderStatus;
    }

    public boolean isPayment() {
        return payment;
    }

    public void setPayment(boolean payment) {
        this.payment = payment;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
