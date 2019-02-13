import { Component, OnInit } from '@angular/core';
import { AgentsService } from './agents.service';
import { Agent } from './agent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agents: Agent[];

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agentsService.getAgents()
      .subscribe(response => {
        this.agents = response.Results;
        console.log(this.agents[0]);
      });
  }
}
