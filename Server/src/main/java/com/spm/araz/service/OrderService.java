package com.spm.araz.service;

import com.spm.araz.model.Order;

import com.spm.araz.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public String addOrder(Order order) {

        Order res = orderRepository.save(order);
        return res.getId();
    }

    public java.util.List<Order> getUserOder(String userId) {

        List<Order> orderList = orderRepository.findUserOder(userId);
        return orderList;

    }

    public Order getOrderProduct(String productID) {
        Order order = orderRepository.checkid(productID);
        return order;

    }

    //get seller orders
    public List<Order> getSellerOrders(String[] products) {
        List<Order> orders = orderRepository.getOrderByProductID(products);
        return orders;
    }

}
