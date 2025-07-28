import { CompanyI } from "./company";

export interface OpportunityI {
 id: number;
  activity_id: number;
  activity_name: string;
  description: string;
  is_user_activity: boolean;
  department_id: number;
  company_id: number;
  user_id: number;
  is_finished: boolean | 0 | 1; // assuming numeric value used like a boolean
  is_favourite: boolean;
  created_at: string; // use `Date` if parsing needed
  company: CompanyI;
}
