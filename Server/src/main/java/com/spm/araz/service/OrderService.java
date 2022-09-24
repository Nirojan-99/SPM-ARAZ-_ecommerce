package com.spm.araz.service;

import com.spm.araz.model.Order;

import com.spm.araz.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public boolean addOrder(Order order) {

        orderRepository.save(order);
        return true;
    }

    public java.util.List<Order> getUserOder(String userId) {

        List<Order> orderList = orderRepository.findUserOder(userId);
        return orderList;

    }

    public Order getOrderProduct(String productID) {
        Order order = orderRepository.checkid(productID);
        return order;

    }


}
