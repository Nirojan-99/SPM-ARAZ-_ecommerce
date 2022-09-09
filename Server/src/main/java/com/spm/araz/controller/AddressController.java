package com.spm.araz.controller;


import com.spm.araz.model.Address;


import com.spm.araz.repository.UserRepository;
import com.spm.araz.response.AddressResponse;
import com.spm.araz.service.AddressService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/address")
public class AddressController {
    @Autowired
    AddressService addressService;





    //    add
//     Address create
    @PostMapping("")
    public ResponseEntity<AddressResponse>  addAddress(@RequestBody Address address ){
        System.out.println(address);

        AddressResponse addressResponse = new AddressResponse();

        List<Address> findaddress = addressService.findDefaultStatus("default");
        System.out.println(findaddress);

        System.out.println(findaddress.size());


        if (findaddress.size() == 0) {

            address.setDefaultStatus("default");

            addressResponse.setAddress(addressService.addAddress(address));
            return new ResponseEntity<>(addressResponse, HttpStatus.CREATED);

        }
        address.setDefaultStatus("");
        addressResponse.setAddress(addressService.addAddress(address));
        return new ResponseEntity<>(addressResponse, HttpStatus.CREATED);


    }





    // get All shipping address
    @GetMapping("/shipping")
    public ResponseEntity<AddressResponse> getAllShippingAddress (){
        AddressResponse addressResponse = new AddressResponse();
        List< Address> findDefaultAddress = addressService.findDefaultStatus("default");
        System.out.println(findDefaultAddress);
        if (findDefaultAddress.size() == 0){
            addressResponse.setMsg("notget");
            return new ResponseEntity<>(addressResponse, HttpStatus.OK);
        }
        addressResponse.setAddressList(findDefaultAddress);
        addressResponse.setMsg("get");
        return new ResponseEntity<>(addressResponse, HttpStatus.OK);
    }




    @GetMapping("/")
    public ResponseEntity<AddressResponse> getAddresses(){
        AddressResponse addressResponse = new AddressResponse();
        System.out.println();
        List<Address> addressList;
        addressList = addressService.getAllAddress();
        addressResponse.setAddressList(addressList);
        if(addressList.size() == 0){
            addressResponse.setMsg("no any data");
            return new ResponseEntity<>(addressResponse, HttpStatus.NO_CONTENT);
        }




        addressResponse.setMsg("data get");
        return new ResponseEntity<>(addressResponse, HttpStatus.OK);

    }
    @GetMapping("/{id}")
    public  Address getAddress(@PathVariable String id){
        Address address = addressService.getAddress(id);

        return address;
    }
    @PutMapping("/{id}")
    public ResponseEntity<AddressResponse> updateAddress (@RequestBody Address address,@PathVariable(required = true)String id){
        AddressResponse addressResponse = new AddressResponse();
        System.out.println("hello");
        System.out.println(id);

        Address existingaddress = addressService.getAddress(id);
        System.out.println(existingaddress);
        System.out.println(address);

        if(existingaddress == null){
            addressResponse.setMsg("No product found");
            return new ResponseEntity<>(addressResponse, HttpStatus.NOT_FOUND);
        }
        else {

            if (address.getName() != null) {
                existingaddress.setName(address.getName());
            }
            if (address.getProvince() != null) {
                existingaddress.setProvince(address.getProvince());
            }
            if (address.getDistrict() != null) {
                existingaddress.setDistrict(address.getDistrict());
            }
            if (address.getAddress() != null) {
                existingaddress.setAddress(address.getAddress());
            }
            if (address.getContactNumber() != null) {
                existingaddress.setContactNumber(address.getContactNumber());
            }

            boolean res = addressService.updateAddress(existingaddress);
            if (res) {

                addressResponse.setMsg("Updated");
                return new ResponseEntity<>(addressResponse, HttpStatus.OK);
            } else {
                addressResponse.setMsg("Unable to update");
                return new ResponseEntity<>(addressResponse, HttpStatus.NOT_MODIFIED);
            }
        }

    }

    @DeleteMapping("/{id}")
    public boolean deleteAddress(@PathVariable String id){
        boolean address = addressService.deleteAddress(id);
        return address;
    }


}
