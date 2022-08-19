package com.spm.araz.status;

public interface ResponseCode {
    int OK = 200;
    int NO_CONTENT = 204;

    int BAD_REQUEST = 400;
    int NOT_FOUND = 404;

    int INTERNAL_SERVER_ERROR = 500;
    int GATEWAY_TIMEOUT = 504;

    int ALREADY_EXIST = 409;
}
