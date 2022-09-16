package com.spm.araz.response;


import com.spm.araz.model.Order;

import java.util.List;

public class OrderResponse {
    private Order order;
    private List<Order> orderList;
    private String msg;

    public OrderResponse(Order order, List<Order> orderList, String msg) {
        this.order = order;
        this.orderList = orderList;
        this.msg = msg;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Order> orderList) {
        this.orderList = orderList;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
