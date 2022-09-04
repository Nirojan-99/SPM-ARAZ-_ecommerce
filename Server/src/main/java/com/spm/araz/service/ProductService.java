package com.spm.araz.service;

import com.spm.araz.model.Product;
import com.spm.araz.model.Review;
import com.spm.araz.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    private int limit = 1;
    private Path foundFile;

    //create product
    public boolean addProduct(Product product) {
        productRepository.save(product);
        return true;
    }

    //get all products
    public List<Product> getAllProducts(int page) {
        int skip = (page - 1) * 1;
        List<Product> products = productRepository.findAllProducts(skip, limit);
        return products;
    }

    //get products by category
    public List<Product> getProductsByCategory(String category, int page) {
        int skip = (page - 1) * 1;
        List<Product> products = productRepository.findByCategory(category, skip, limit);
        return products;
    }

    //get products by title
    public List<Product> getProductsByTitle(String title, int page) {
        int skip = (page - 1) * 1;
        List<Product> products = productRepository.findByTitle(title, skip, limit);
        return products;
    }

    //get product by id
    public Product getProduct(String id) {
        return productRepository.findById(id);
    }

    //add review
    public boolean addReview(Product product, Review review) {
        product.setReviews(review);
        productRepository.save(product);
        return true;
    }

    //add seller reply
    public boolean addReply(Product product, Review review) {

        ArrayList<Review> reviews = product.getReviews();

        int index = -1;
        for (int i = 0; i < reviews.size(); i++) {
            if (reviews.get(i).getUserName().equals(review.getUserName()) && reviews.get(i).getDate().equals(review.getDate()) && reviews.get(i).getReview().equals(review.getReview())) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            product.getReviews().get(index).setSellerReply(review.getSellerReply());
            productRepository.save(product);
            return true;
        } else {
            return false;
        }

    }

    //update product
    public boolean updateProduct(Product product) {
        productRepository.save(product);
        return true;
    }

    //find by store
    public List<Product> getStoreProducts(String id) {
        List<Product> products = productRepository.findByStoreId(id);
        return products;
    }

    //delete by id
    public boolean deleteById(String id) {
        productRepository.deleteById(id);
        return true;
    }

    //get file
    public Resource getFile(String name) throws IOException {

        Path dirPath = Paths.get("Product-images");

        Files.list(dirPath).forEach(file -> {
            if (file.getFileName().toString().startsWith(name)) {
                foundFile = file;
                return;
            }
        });

        if (foundFile != null) {
            return new UrlResource(foundFile.toUri());
        }

        return null;
    }

}
