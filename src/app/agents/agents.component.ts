import { Component, OnInit } from '@angular/core';
import { AgentsService } from './agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agents = [];

  constructor(private agentsService: AgentsService) {}

  ngOnInit() {
    this.agentsService.getAgents().subscribe(response => {
      this.agents = response.Results;
      console.log(this.agents);
    });
  }
  deleteItem(agent) {
    for (let i = 0; i <= this.agents.length; i++) {
      if (agent === this.agents[i]) {
        this.agents.splice(i, 1);
      }
    }
  }

  addAgent(name) {
    const agentDetails = {
      Name: name
    };
    if (name !== '') {
     this.agents.push(agentDetails);
  } else {
    alert('Field required **');
  }
  }
}
