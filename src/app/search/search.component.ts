import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:string = "";
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }
}
