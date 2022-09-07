package com.spm.araz.service;
import com.spm.araz.model.Address;
import com.spm.araz.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;


    private int limit = 1;

    public Address addAddress (Address address){
        return addressRepository.save(address);

    }




    public List< Address> findDefaultStatus(String defaultStatus){


        return addressRepository.findDefaultStatus( defaultStatus );

    }
    //get all Address
    public List<Address> getAllAddress() {

        List<Address> addresses = addressRepository.findAll();
        return addresses;
    }





    public Address getAddress (String id){
        return  addressRepository.findById(id);
    }

    public boolean updateAddress(Address address){
        addressRepository.save(address);
        return true;
    }


    public boolean deleteAddress (String id){
        addressRepository.deleteById(id);
        return true;
    }



}
