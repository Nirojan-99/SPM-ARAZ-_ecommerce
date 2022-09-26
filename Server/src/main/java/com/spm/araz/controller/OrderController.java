package com.spm.araz.controller;


import com.spm.araz.model.Order;

import com.spm.araz.model.Product;
import com.spm.araz.model.User;
import com.spm.araz.response.OrderResponse;
import com.spm.araz.service.OrderService;

import com.spm.araz.service.ProductService;
import com.spm.araz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @Autowired
    UserService userService;
    @Autowired
    ProductService productService;

    // add order
    @PostMapping("")
    public ResponseEntity<String> addOrder(@RequestBody Order order) {

        String id = orderService.addOrder(order);
        return new ResponseEntity<>(id, HttpStatus.OK);


    }


    // customer get order
    @GetMapping("/user")
    public ResponseEntity<OrderResponse> getOrderUser(@RequestParam("userId") String userId) {


        OrderResponse orderResponse = new OrderResponse();
        List<Order> orderList = orderService.getUserOder(userId);
        System.out.println(orderList);
        orderResponse.setOrderList(orderList);

        return new ResponseEntity<>(orderResponse, HttpStatus.OK);


    }

    //     seller manage order
    @GetMapping("/seller")
    public ResponseEntity<OrderResponse> getOrderSeller(@RequestParam("userId") String userId) {
        User user = userService.getUser(userId);


        OrderResponse orderResponse = new OrderResponse();
        if (user == null) {
            orderResponse.setMsg("User is Not found");
            return new ResponseEntity<>(orderResponse, HttpStatus.NOT_FOUND);
        } else {
            System.out.println(user.getProducts());
            ArrayList<String> products = user.getProducts();
            ArrayList<Order> orders = new ArrayList<>();


//
//            for (String pro :products) {
//                  Order order = orderService.getOrderProduct(pro);
//                  orders.add(order);
//            }
//
//            System.out.println(orders);
//            orderResponse.setOrderList(orders);


//            ArrayList<Order> ordersid =
//            ArrayList<Product> product = new ArrayList<>();
//            for (String pro: products) {
//                Product product1 = orderService;
//                product.add(product1);
//            }
//            System.out.println(product);
            orderResponse.setMsg("get user");
            return new ResponseEntity<>(orderResponse, HttpStatus.OK);
        }

    }

}
