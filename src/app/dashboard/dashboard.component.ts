import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../agents/agents.service';
import { Agent } from '../agents/agent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  agents: Agent[];

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agentsService.getAgents()
      .subscribe(response => {
        this.agents = response.Results.slice(0, 5);
        // console.log(this.agents[0]);
      });
  }
}
