import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  RequestOptions, URLSearchParams, Response, Http } from '@angular/http'; 

@Injectable()
export class CocomoUserService {
	private url = 'http://127.0.0.1:8000';
	item = JSON.parse(localStorage.getItem('tokens'));
	itemCocomo;
	private userId: number;
	constructor(private http: HttpClient) {
		if (this.item != null) {
      		this.userId = this.item.user.id;
      		this.itemCocomo = JSON.parse(localStorage.getItem('cocomo'));
    	}
	}

	setCocomoUser(data: any): Observable<boolean> { 
		const url = `${this.url}/api/setCocomoUser`;
		return this.http.post(url, data)
	      .do(res => {
	        //localStorage.setItem('cocomo', JSON.stringify(res));
	      });
	}

	getUserId() {
		return this.userId;
	}
	getCocomoUser(): Observable<any> {
		const url = `${this.url}/api/getCocomoUser`;
		let params = new HttpParams();
		params = params.append('user_id', this.userId.toString());
		return this.http.get(url, {params: params})
	      .do(data=>{
	      		console.log(data);
	      		localStorage.setItem('cocomo', JSON.stringify(data));
	    		return JSON.stringify(data);
	    	  });

	}
	private extractData(res: Response) {
		
    }

}