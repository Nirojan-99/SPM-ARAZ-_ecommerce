package com.spm.araz.controller;


import com.spm.araz.model.*;

import com.spm.araz.response.OrderResponse;
import com.spm.araz.service.OrderService;

import com.spm.araz.service.ProductService;
import com.spm.araz.service.StoreService;
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
    @Autowired
    StoreService storeService;

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

    //get seller orders
    @GetMapping("/seller/{id}")
    public ResponseEntity<ArrayList<Order>> getSellerOrders(@PathVariable(name = "id") String id) {
        Store store = storeService.getStoreByUserID(id);

        String storeID = store.getId();

        List<Product> products = productService.getStoreAllProducts(storeID);

        String[] productID = new String[products.size()];

        int index = 0;
        for (Product product : products) {
            productID[index] = product.getId();
            index++;
        }

        List<Order> orders = orderService.getSellerOrders(productID);


        ArrayList<Order> resOrders = new ArrayList<>();

        for (Order order : orders) {

            ArrayList<OrderItem> orderItems = order.getProducts();
            order.setProducts(new ArrayList<>());


            for (OrderItem item : orderItems) {
                for (String pid : productID) {
                    if (item.getProductID().equals(pid)) {

                        Product product = productService.getProduct(item.getProductID());
                        item.setProductID(product.getTitle());
                        order.addProduct(item);
                    }
                }
            }

            resOrders.add(order);

        }

        return new ResponseEntity<>(resOrders, HttpStatus.OK);

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
