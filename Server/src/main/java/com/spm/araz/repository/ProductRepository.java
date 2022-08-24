package com.spm.araz.repository;

import com.spm.araz.model.Product;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, Integer> {
    //    @Query("{'title':{$regex:?0,$options:'i'}}")
    @Aggregation(pipeline = {
            "{ '$match': {'title':{$regex:?0,$options:'i'}} }",
            "{ '$skip' : ?1 }",
            "{ '$limit' : ?2 }"
    })
    List<Product> findByCategory(String category, int skip, int limit);


    @Aggregation(pipeline = {
            "{ '$match': {'title':{$regex:?0,$options:'i'}} }",
            "{ '$skip' : ?1 }",
            "{ '$limit' : ?2 }"
    })
    List<Product> findByTitle(String title, int skip, int limit);

    @Aggregation(pipeline = {
            "{ '$skip' : ?0 }",
            "{ '$limit' : ?1 }"
    })
    List<Product> findAllProducts(int skip, int limit);

    Product findById(String id);
}