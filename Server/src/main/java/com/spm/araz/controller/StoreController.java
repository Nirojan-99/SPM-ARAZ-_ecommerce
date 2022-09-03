package com.spm.araz.controller;

import com.spm.araz.model.Store;
import com.spm.araz.response.StoreResponse;
import com.spm.araz.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/stores")
public class StoreController {

    @Autowired
    StoreService storeService;

    //new store
    @PostMapping("")
    public ResponseEntity<StoreResponse> addStore(@RequestBody(required = true) Store store) {
        //check with user id for already exist
        boolean res = storeService.createStore(store);

        StoreResponse storeResponse = new StoreResponse();

        if (res) {
            storeResponse.setMsg("Store Created");
            return new ResponseEntity<>(storeResponse, HttpStatus.OK);
        } else {
            storeResponse.setMsg("Unable to create Store");
            return new ResponseEntity<>(storeResponse, HttpStatus.BAD_REQUEST);
        }
    }

    //get all stores
    @GetMapping("")
    public ResponseEntity<StoreResponse> getStores(@RequestParam(required = false, defaultValue = "1") int page, @RequestParam(required = false) String title) {
        List<Store> stores;

        if (title != null) {
            stores = storeService.getStoreByTitle(title, page);
        } else {
            stores = storeService.getAllStores(page);
        }

        StoreResponse storeResponse = new StoreResponse();
        storeResponse.setStoreList(stores);
        return new ResponseEntity<>(storeResponse, HttpStatus.OK);
    }

    //get store by id
    @GetMapping("/{id}")
    public ResponseEntity<StoreResponse> getStoreById(@PathVariable(required = true, name = "id") String id) {
        Store store = storeService.getById(id);
        StoreResponse storeResponse = new StoreResponse();
        if (store != null) {
            storeResponse.setStore(store);
            return new ResponseEntity<>(storeResponse, HttpStatus.OK);
        } else {
            storeResponse.setMsg("No store found");
            return new ResponseEntity<>(storeResponse, HttpStatus.NO_CONTENT);
        }

    }

    //delete store
    @DeleteMapping("/{id}")
    public ResponseEntity<StoreResponse> deleteStore(@PathVariable(required = true, name = "id") String id) {
        boolean res = storeService.deleteById(id);
        StoreResponse storeResponse = new StoreResponse();
        if (res) {
            storeResponse.setMsg("Deleted");
            return new ResponseEntity<>(storeResponse, HttpStatus.OK);
        } else {
            storeResponse.setMsg("Unable to delete");
            return new ResponseEntity<>(storeResponse, HttpStatus.NOT_FOUND);
        }
    }

    //disapprove store
    @PutMapping("/status/{id}/{status}")
    public ResponseEntity<StoreResponse> updateApproval(@PathVariable("id") String id, @PathVariable(required = true) boolean status) {
        Store store = storeService.getById(id);
        StoreResponse storeResponse = new StoreResponse();

        if (store != null) {
            boolean res = storeService.updateStatus(store, status );
            if (res) {
                storeResponse.setMsg("updated");
                return new ResponseEntity<>(storeResponse, HttpStatus.OK);
            } else {
                storeResponse.setMsg("unable to update");
                return new ResponseEntity<>(storeResponse, HttpStatus.NOT_MODIFIED);
            }
        } else {
            storeResponse.setMsg("unable to update");
            return new ResponseEntity<>(storeResponse, HttpStatus.NOT_FOUND);
        }
    }
}