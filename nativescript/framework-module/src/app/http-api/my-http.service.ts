import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class MyHttpService {

    private serverUrl = "https://httpbin.org/delete";

    constructor(private  httpClient: HttpClient) {
    }

    deleteData() {

        let headersCollection = this.createDeleteRequestHeader();
        return this.httpClient.delete(this.serverUrl, {headers: headersCollection});
    }

    getData() {

        let headersCollection = this.createGetRequestHeader();
        return this.httpClient.get(this.serverUrl, {headers: headersCollection});
    }

    postDate(data : any){
        let headersCollection = this.createDeleteRequestHeader();
        return this.httpClient.post(this.serverUrl,{data}, {headers: headersCollection})
    }
    private createDeleteRequestHeader(): HttpHeaders {

        let headers = new HttpHeaders({
            "ContentType": "application/json"
        });

        return headers;
    }

    private createGetRequestHeader(): HttpHeaders {

        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json"
        });
        return headers;
    }

}
