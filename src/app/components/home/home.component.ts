import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.getJson().subscribe(data => console.log(data))
  }

}
