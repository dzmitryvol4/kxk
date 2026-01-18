import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HeaderData{
    private headerInfo = new Subject<string>();

    data$ = this.headerInfo.asObservable();

    sendData(data:string){
        this.headerInfo.next(data);
        console.log(data)
    }

}