import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../agents/agents.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {
  agent = { Theme: { }, About: { } };

  constructor(private agentsService: AgentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAgent();
  }

  getAgent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id, 'id laao');
    this.agentsService.getAgentDetails(id)
      .subscribe(response => {
        this.agent = response;
      });
  }

}
