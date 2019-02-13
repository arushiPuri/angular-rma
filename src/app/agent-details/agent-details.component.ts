import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../agents/agents.service';
import { Agent } from '../agents/agent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {
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
