import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private giphys: any;
  private apiKey = 'dc6zaTOxFJmzC';
  private apiUrl = 'http://api.giphy.com/v1/gifs/search';

  constructor(
    private http: Http) {
    this.giphys = [];
  }

  getGiphys(searchQuery: string, limit: number): Promise<any> {
    const query = this.apiUrl + '?q=' + searchQuery + '&api_key=' + this.apiKey + '&limit=' + limit;

    return this.http.get(query)
      .toPromise()
      .then(response => {
        this.giphys = response.json().data;
        return response.json();
      })
      .catch(this.handleError);
  }

  getCashedGiphys(): Promise<any> {
    return Promise.resolve(this.giphys);
  }

  getGiphy(id: string): Promise<any> {
    return Promise.resolve(this.giphys.find(item => item.id === id));
  }

  private handleError(error: any) {
    return Promise.reject(error.statusText || error).then(function() {
      // doesn't call
    }, function() {
      return {error: error.json()};
    });
  }
}
