import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(){
    const fields = 'name,description,version,homepage'
    let value = this.queryField.value;
    const params = {
      search: value,
      fields: fields
    };
  
    if(value && (value = value.trim()) !== '')

   
    this.results$ = this.http.get(this.SEARCH_URL, { params })
    .pipe(
      tap((res:any) => this.total = res.total),
      map(res => res.results)
    );
  }

}
