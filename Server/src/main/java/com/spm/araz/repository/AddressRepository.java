package com.spm.araz.repository;


import com.spm.araz.model.Address;
import com.spm.araz.model.Product;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AddressRepository extends MongoRepository<Address, Integer> {

    @Aggregation(pipeline = {
            "{ '$skip' : ?0 }",
            "{ '$limit' : ?1 }"
    })
    List<Address> findAllAddress(int skip, int limit);


    Address findById(String id);

}
