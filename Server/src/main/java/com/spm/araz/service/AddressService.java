package com.spm.araz.service;
import com.spm.araz.model.Address;
import com.spm.araz.model.Product;
import com.spm.araz.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AddressService {
    @Autowired
   private AddressRepository addressRepository;
    private int limit = 1;

    public  boolean addAddress (Address address){
        addressRepository.save(address);
        return  true;
    }
    //get all products
    public List<Address> getAllAddress(int page) {
        int skip = (page - 1) * 1;
        List<Address> addresses = addressRepository.findAllAddress(skip, limit);
        return addresses;
    }

    public Address getAddress (String id){
        return  addressRepository.findById(id);
    }

    public boolean updateAddress(Address address){
        addressRepository.save(address);
        return true;
    }

}
