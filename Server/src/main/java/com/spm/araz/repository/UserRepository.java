package com.spm.araz.repository;

import com.spm.araz.model.Store;
import com.spm.araz.model.User;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User,Integer> {
    User findById(String id);

    @Aggregation(pipeline = {
            "{ '$match': {'email':?0} }"

    })
    User findByEmail(String email);
}
