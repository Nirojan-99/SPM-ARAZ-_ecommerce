package com.spm.araz.controller;

import com.spm.araz.model.Payment;
import com.spm.araz.model.Product;
import com.spm.araz.model.User;
import com.spm.araz.response.ProductResponse;
import com.spm.araz.response.UserResponse;
import com.spm.araz.service.ProductService;
import com.spm.araz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/User")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    ProductService productService;

    //add to cart
    @PostMapping("/cart")
    public ResponseEntity<UserResponse> addToCart(
            @RequestParam String productId,
            @RequestParam int count,
            @RequestParam String userId
    ) {
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
    public ResponseEntity<UserResponse> removeFromCart(
            @RequestParam String userId,
            @RequestParam String productId
    ) {
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
    public ResponseEntity<UserResponse> addPayment(
            @RequestBody Payment payment,
            @PathVariable("id") String id
    ) {
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
    public ResponseEntity<UserResponse> deletePayment(
            @RequestParam int cardNumber,
            @PathVariable("id") String id
    ) {
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

    //new user
    @PostMapping("")
    public ResponseEntity<UserResponse> addUser(
            @RequestBody(required = true) User user
    ) {
        User res = userService.createUser(user);

        UserResponse userResponse = new UserResponse();
        if (res.getId() != null) {
            User user1 = new User();
            user1.setId(res.getId());
            user1.setUserType(res.getUserType());
            userResponse.setUser(user1);
            userResponse.setMsg("User created");
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        } else {
            userResponse.setMsg("Unable to create User");
            return new ResponseEntity<>(userResponse, HttpStatus.BAD_REQUEST);
        }
    }

    //get user by email for login
    @PostMapping("/login")
    public ResponseEntity<UserResponse> getUserByEmail(
            @RequestParam("email") String email,
            @RequestParam("password") String password
    ) {
        User user = userService.getByEmail(email);

        UserResponse userResponse = new UserResponse();

        if (user == null) {
            userResponse.setMsg("Email Not found");

            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            if (user.getPassword().equals(password)) {
                User user1 = new User();
                user1.setEmail(user.getEmail());
                user1.setId(user.getId());
                user1.setUserType(user.getUserType());
                userResponse.setUser(user1);
                userResponse.setMsg("Valid Email and Password");
            } else {
                userResponse.setMsg("Invalid Email and Password");
            }

            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable(required = true) String id,
            @RequestBody(required = true) User user
    ) {
        UserResponse userResponse = new UserResponse();
        User exisitngUser = userService.getUser(id);

        if (exisitngUser == null) {
            userResponse.setMsg("No user found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        } else {
            if (user.getName() != null) {
                exisitngUser.setName(user.getName());
            }
            if (user.getEmail() != null) {
                exisitngUser.setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                exisitngUser.setPassword(user.getPassword());
            }
            if (user.getContactNo() != 0) {
                exisitngUser.setContactNo(user.getContactNo());
            }
            if (user.getAddress() != null) {
                exisitngUser.setAddress(user.getAddress());
            }
            if (user.getDob() != null) {
                exisitngUser.setDob(user.getDob());
            }
            if (user.getGender() != null) {
                exisitngUser.setGender(user.getGender());
            }
            if (user.getUserType() != null) {
                exisitngUser.setUserType(user.getUserType());
            }

        }
        //save
        boolean res = userService.updateUser(exisitngUser);

        if (res) {
            userResponse.setMsg("Updated");
            return new ResponseEntity<>(userResponse, HttpStatus.OK);

        } else {
            userResponse.setMsg("Unable to update");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_MODIFIED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable String id) {
        User user = userService.getUser(id);
        UserResponse userResponse = new UserResponse();

        if (user != null) {

            userResponse.setUser(user);
            return new ResponseEntity<>(userResponse, HttpStatus.OK);
        } else {
            userResponse.setMsg("No user found");
            return new ResponseEntity<>(userResponse, HttpStatus.NOT_FOUND);
        }

    }
}


