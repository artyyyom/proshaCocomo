import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CocomoUserService {
	private url = 'http://127.0.0.1:8000';
	item = JSON.parse(localStorage.getItem('tokens'));
	private userId: number;
	constructor(private http: HttpClient) {
		if (this.item != null) {
      		this.userId = this.item.user.id;
    	}
	}

	setCocomoUser(data: any): Observable<boolean> { 
		const url = `${this.url}/api/setCocomoUser`;
		return this.http.post(url, data)
	      .do(res => {
	        localStorage.setItem('cocomo', JSON.stringify(res));
	      });
	}

	getUserId() {
		return this.userId;
	}
	/*getCocomoUser(data: any): Observable<boolean> {
		const url = `${this.url}/api/getCocomoUser`;


	}*/

}