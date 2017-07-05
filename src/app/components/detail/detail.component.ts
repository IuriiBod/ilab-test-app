import {Component} from '@angular/core';
import { SearchService } from "../../services/search.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'giphy-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class GiphyDetailComponent {
    giphy: any;
    
    constructor(
      private searchService: SearchService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.searchService.getGiphy(params.get('id')))
        .subscribe(giphy => this.giphy = giphy);
    }
    
    goBack(): void {
      this.location.back();
    }
}