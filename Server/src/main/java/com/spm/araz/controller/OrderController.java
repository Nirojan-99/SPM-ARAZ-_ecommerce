package com.spm.araz.controller;


import com.spm.araz.model.Order;

import com.spm.araz.response.OrderResponse;
import com.spm.araz.service.OrderService;

import com.spm.araz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @Autowired
    UserService userService;

    // add order
    @PostMapping("")
    public ResponseEntity<OrderResponse> addOrder(@RequestBody Order order) {


        OrderResponse orderResponse = new OrderResponse();
        orderService.addOrder(order);
        orderResponse.setMsg("odercreate");
        return new ResponseEntity<>(orderResponse, HttpStatus.OK);


    }


    // customer get order
    @GetMapping("/user")
    public ResponseEntity<OrderResponse> getOrderUser(@RequestParam("userId") String userId) {


        OrderResponse orderResponse = new OrderResponse();
        List<Order> orderList =  orderService.getUserOder(userId);
        System.out.println(orderList);
        orderResponse.setOrderList(orderList);

        return new ResponseEntity<>(orderResponse, HttpStatus.OK);


    }

    // seller manage order
//    @GetMapping("/seller")
//    public  ResponseEntity<OrderResponse> getOrderSeller(@RequestParam("userId") String userId,){
//
//    }

}
