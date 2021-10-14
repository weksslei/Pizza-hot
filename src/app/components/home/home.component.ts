import { Data } from './../../models/data.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public data!: Data;
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.subscription.add(this.getJson());
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe()
  }

  private getJson() {
    this.repositoryService.getJson().subscribe(data => this.data = data);
  }

}
