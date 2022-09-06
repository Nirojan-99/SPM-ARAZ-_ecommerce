package com.spm.araz.controller;


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
@RequestMapping("/Users")
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
//        User user= userService.getUser(userId)

        UserResponse userResponse = new UserResponse();

        if (product == null) {
            userResponse.setMsg("No product found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            userService.addToCart()
        }
    }

}
