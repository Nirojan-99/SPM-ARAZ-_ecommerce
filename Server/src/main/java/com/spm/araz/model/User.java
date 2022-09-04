package com.spm.araz.model;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

public class User {
    @Id
    private String id;
    private ArrayList<String> Favorite;
}
