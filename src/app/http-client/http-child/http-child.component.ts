import { Component } from '@angular/core';
import { Job } from '../interface/job';
import { JobsService } from '../jobs.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-child.component.html',
  styleUrl: './http-child.component.css',
  providers: [HttpClient],
})
export class HttpChildComponent {
  jobs: Job[] = [];
  selectedJob: Job = {
    id: 0,
    title: '',
    description: '',
    location: '',
    salary: '',
  };
  editMode = false;
  searchTerm = '';

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.getJobs();
    console.log(1);
  }

  getJobs(): void {
    this.jobsService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      console.log(data);
    });
  }

  editJob(job: Job): void {
    this.selectedJob = { ...job };
    this.editMode = true;
  }

  deleteJob(id: number): void {
    this.jobsService.deleteJob(id).subscribe(() => {
      this.getJobs();
    });
  }

  saveJob(): void {
    if (this.editMode) {
      this.jobsService
        .updateJob(this.selectedJob.id, this.selectedJob)
        .subscribe(() => {
          this.getJobs();
          this.resetForm();
        });
    } else {
      this.jobsService.createJob(this.selectedJob).subscribe(() => {
        this.getJobs();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.selectedJob = {
      id: 0,
      title: '',
      description: '',
      location: '',
      salary: '',
    };
    this.editMode = false;
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.jobsService.searchJobs(this.searchTerm).subscribe((data: Job[]) => {
        this.jobs = data;
      });
    } else {
      this.getJobs();
    }
  }
  
}
