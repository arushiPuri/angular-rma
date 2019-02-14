import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDetailsComponent } from '../app/agent-details/agent-details.component';
import { AgentsComponent } from '../app/agents/agents.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AgentsComponent },
  { path: 'agent-details/:id', component: AgentDetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
