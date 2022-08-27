package com.spm.araz.model;

public class Address {
    private String province;
    private String district;
    private String address;

    public Address(String province, String district, String address) {
        this.province = province;
        this.district = district;
        this.address = address;
    }

    public Address(){}

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
