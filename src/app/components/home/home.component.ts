import { Data } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data!: Data;
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
     this.repositoryService.getJson().subscribe(data => this.data = data);
  }

}
