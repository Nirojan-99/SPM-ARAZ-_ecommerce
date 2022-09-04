package com.spm.araz.controller;


import com.spm.araz.model.Address;

import com.spm.araz.response.Response;
import com.spm.araz.service.AddressService;
import com.spm.araz.status.ResponseCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/address")
public class AddressController {
    @Autowired
    AddressService addressService;

    //add
    @PostMapping("")
    public boolean addAddress(@RequestBody Address address){
        System.out.println(address);
        return addressService.addAddress(address);
    }



    @GetMapping("/")
    public Response getAddresses(@RequestParam(required = false, defaultValue = "3") int page){
        System.out.println(page);
        List<Address> addressList;
        addressList = addressService.getAllAddress(page);
        if(addressList.size() == 0){
            return new Response(ResponseCode.NO_CONTENT, addressList, null, "no any data");
        }



        return new Response(ResponseCode.OK, addressList, null, null);
    }
    @GetMapping("/{id}")
    public  Address getAddress(@PathVariable String id){
        Address address = addressService.getAddress(id);
        return address;
    }
    @PutMapping("/{id}")
    public Response updateAddress (@RequestBody Address address,@PathVariable(required = true)String id){
        System.out.println("hello");
        System.out.println(id);
       Address existingaddress = addressService.getAddress(id);
       if(existingaddress == null){
           return new Response(ResponseCode.NOT_FOUND, null, null, "No product found");
       }
       else {
       }
           if(address.getName() != null){
               existingaddress.setName(address.getName());
           }
           if(address.getProvince() != null){
               existingaddress.setProvince(address.getProvince());
           }
           if(address.getDistrict() != null){
               existingaddress.setDistrict(address.getDistrict());
           }
           if(address.getAddress() != null){
               existingaddress.setAddress(address.getAddress());
           }
           if(address.getContactNumber() != null){
               existingaddress.setContactNumber(address.getContactNumber());
           }

           boolean res = addressService.updateAddress(existingaddress);
           if(res){
               return new Response(ResponseCode.OK, null, "Updated", null);
           }
           else {
               return new Response(ResponseCode.NOT_FOUND, null, null, "Unable to update");

           }

    }

}
