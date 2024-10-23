import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './interface/job';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiUrl = 'https://react-jobs-app-db.onrender.com';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }

  searchJobs(searchTerm: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs?q=${searchTerm}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}/jobs`, job);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/jobs/${id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/jobs/${id}`);
  }
}
