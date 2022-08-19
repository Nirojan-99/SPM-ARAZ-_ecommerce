package com.spm.araz.controller;

import com.spm.araz.model.Product;
import com.spm.araz.model.Review;
import com.spm.araz.response.Response;
import com.spm.araz.service.ProductService;
import com.spm.araz.status.ResponseCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    //add new product
    @PostMapping("")
    public boolean addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    //get all products
    @GetMapping("/")
    public Response getProducts(@RequestParam(required = false) String category, @RequestParam(required = false) String title, @RequestParam(required = false, defaultValue = "1") int page) {
        List<Product> products;

        //get by category
        if (category != null) {
            products = productService.getProductsByCategory(category, page);
            return new Response(ResponseCode.OK, products, null, null);
        }
        //search by title
        if (title != null) {
            products = productService.getProductsByTitle(title, page);
            return new Response(ResponseCode.OK, products, null, null);
        }
        //get all products
        products = productService.getAllProducts(page);
        return new Response(ResponseCode.OK, products, null, null);
    }

    //get product by id
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable String id) {
        Product product = productService.getProduct(id);
        return product;
    }

    //add review
    @PostMapping("/{id}/reviews")
    public Response addReview(@PathVariable(required = true) String id, @RequestBody Review review) {

        //check product existence
        Product product = productService.getProduct(id);
        if (product == null) {
            return new Response(ResponseCode.NOT_FOUND, null, null, "No product found");
        } else {
            boolean res = productService.addReview(product, review);
            if (res) {
                return new Response(ResponseCode.OK, null, "Review Added", null);
            } else {
                return new Response(ResponseCode.NOT_FOUND, null, null, "Unable to update");
            }
        }
    }

    //add seller reply
    @PostMapping("/{id}/reviews/reply")
    public Response addSellerReply(@PathVariable(required = true) String id, @RequestBody Review review) {
        //check product existence
        Product product = productService.getProduct(id);
        if (product == null) {
            return new Response(ResponseCode.NOT_FOUND, null, null, "No product found");
        } else {
            boolean res = productService.addReply(product, review);
            if (res) {
                return new Response(ResponseCode.OK, null, "reply Added", null);
            } else {
                return new Response(ResponseCode.NOT_FOUND, null, null, "Unable to update");
            }
        }
    }

    //update product
    @PutMapping("/{id}")
    public Response updateProduct(@RequestBody Product product, @PathVariable(required = true) String id) {
        //check product existence
        Product existingProduct = productService.getProduct(id);
        if (existingProduct == null) {
            return new Response(ResponseCode.NOT_FOUND, null, null, "No product found");
        } else {
            if (product.getCategory() != null) {
                existingProduct.setCategory(product.getCategory());
            }
            if (product.getDescription() != null) {
                existingProduct.setDescription(product.getDescription());
            }
            if (product.getImages() != null) {
                //TODO
            }
            if (product.getPrice() != 0) {
                existingProduct.setPrice(product.getPrice());
            }
            if (product.getTitle() != null) {
                existingProduct.setTitle(product.getTitle());
            }
            //save
            boolean res = productService.updateProduct(existingProduct);

            if(res){
                return new Response(ResponseCode.NOT_FOUND, null, "Updated", null);
            }else{
                return new Response(ResponseCode.NOT_FOUND, null, null, "Unable to update");
            }
        }
    }
}
