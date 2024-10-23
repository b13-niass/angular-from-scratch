import { Company } from './company';

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company?: Company;
}
