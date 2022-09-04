package com.spm.araz.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Cart {
    private HashMap<String, Integer> products;

    public Cart() {
        products = new HashMap<>();
    }

    public void addToCart(String productId, int count) {
        products.put(productId, count);
    }

    public void removeFromCart(String productId) {
        products.remove(productId);
    }

    public void emptyCart() {
        products.clear();
    }

}
