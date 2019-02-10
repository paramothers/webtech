import {Component, OnInit} from '@angular/core';
import {MyHttpService} from "~/app/http-api/my-http.service";

@Component({
    selector: 'ns-http-api',
    templateUrl: './http-api.component.html',
    styleUrls: ['./http-api.component.css'],
    moduleId: module.id,
})
export class HttpApiComponent implements OnInit {
    private host: string;
    private userAgent: string;
    private orign: string;
    private url: string;
    private data: string;

    constructor(private httpService: MyHttpService) {
    }

    ngOnInit() {
    }

    private extractData() {

        this.httpService.deleteData()
            .subscribe((result) => {
                this.onGetDataSuccess(result);
            }, error1 => {
                console.log(error1);
            })
    }

    private getData() {
        this.httpService.getData().subscribe((result) => {
            this.onGetDataSuccess(result);
        }, error1 => {
            console.log(error1)
        })
    }

    private onGetDataSuccess(result) {

        this.host = result.headers.Host;
        this.userAgent = result.headers["User-Agent"];
        this.orign = result.origin;
        this.url = result.url;
        this.data = result.data;

    }
}
