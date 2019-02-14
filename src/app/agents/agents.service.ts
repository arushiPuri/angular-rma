import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Agent } from './agent';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(
    private http: HttpClient) { }

  getAgents(): Observable<Result> {
    return this.http.get<Result>('https://devapi.ratemyagent.com.au/Sales/Locations/Cities/84/Agents?StatisticType=TotalRecommendations&skip=0&take=20');
  }

  getAgentDetails(id: string): Observable<Result> {
    // TODO: fix Result.ts accordingly as angular is stupid
    return this.http.get<Result>(`https://devapi.ratemyagent.com.au/Agents/Code-${id}?getPromotedState=true`);
  }
}
