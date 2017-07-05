import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { SearchService } from "../../services/search.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    @Input()
    value: string
    limit: number
    limits:Array<number> = [5, 10, 20, 30];
    giphys: any
    inputControl = new FormControl();
        
    constructor(
      private searchService: SearchService) {
    }

    ngOnInit() {
      this.value = '';
      this.limit = 5;
      
      this.searchService.getCashedGiphys()
        .then(result => this.giphys = result)
        .catch(this.handleError);

      this.inputControl.valueChanges
        .debounceTime(1000)
        .subscribe(value => this.getGiphys(value));
    }    

    getGiphys(value: string) {
      this.value = value;

      if (this.value.length >= 3) {
        this.searchService.getGiphys(this.value, this.limit)
        .then(result => this.giphys = result.data)
        .catch(this.handleError);
      }
    }

    private handleError(error: any) {
      return Promise.reject(error.statusText || error).then(function() {
        // doesn't call
      }, function() {
        return {error: error.json()};
      });
    }
}