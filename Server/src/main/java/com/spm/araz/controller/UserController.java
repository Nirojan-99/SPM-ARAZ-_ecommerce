package com.spm.araz.controller;


import com.spm.araz.model.Payment;
import com.spm.araz.model.Product;
import com.spm.araz.model.User;
import com.spm.araz.response.UserResponse;
import com.spm.araz.service.ProductService;
import com.spm.araz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    ProductService productService;

    //add to cart
    @PostMapping("/cart")
    public ResponseEntity<UserResponse> addToCart(@RequestParam String productId,
                                                  @RequestParam int count,
                                                  @RequestParam String userId) {
        Product product = productService.getProduct(productId);

        User user = userService.getUser(userId);

        UserResponse userResponse = new UserResponse();

        if (product == null || user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            boolean res = userService.addToCart(user, productId, count);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    //remove from cart
    @PutMapping("/cart")
    public ResponseEntity<UserResponse> removeFromCart(@RequestParam String userId, @RequestParam String productId) {
        Product product = productService.getProduct(productId);

        User user = userService.getUser(userId);

        UserResponse userResponse = new UserResponse();

        if (product == null || user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            boolean res = userService.removeItemFromCart(user, productId);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    //empty cart
    @DeleteMapping("/cart")
    public ResponseEntity<UserResponse> emptyCart(@RequestParam String userId) {
        User user = userService.getUser(userId);

        UserResponse userResponse = new UserResponse();

        if (user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            boolean res = userService.emptyCart(user);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    //get cart
    @GetMapping("/cart")
    public ResponseEntity<UserResponse> getCart(@RequestParam String userId) {
        User user = userService.getUser(userId);

        UserResponse userResponse = new UserResponse();

        if (user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            userResponse.setUser(user);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    //add payment
    @PostMapping("/payment/{id}")
    public ResponseEntity<UserResponse> addPayment(@RequestBody Payment payment, @PathVariable("id") String id) {
        User user = userService.getUser(id);

        UserResponse userResponse = new UserResponse();

        if (user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            userService.addPayment(user, payment);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    //remove payment
    @DeleteMapping("/payment/{id}")
    public ResponseEntity<UserResponse> deletePayment(@RequestParam int cardNumber, @PathVariable("id") String id) {
        User user = userService.getUser(id);

        UserResponse userResponse = new UserResponse();

        if (user == null) {
            userResponse.setMsg("Not found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            userService.deletePayment(user, cardNumber);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

}
