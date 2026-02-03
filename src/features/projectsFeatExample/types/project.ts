export interface CreatedBy {
  id: number;
  name: string;
  email: string;
  image?: string;
  position_name?: string | null;
}

export interface Project {
  id: number;
  name: string;
  status: 'in_progress' | 'not_started' | 'completed' | 'at_risk' | 'delayed';
  status_text?: string;
  start_date: string;
  end_date: string;
  created_by: CreatedBy;
  members_count: number;
  members: any[];
  created_at: string;
  program_id: number;
  wallet_id?: number;
  description?: string;
  type?: string;
  risk_type?: string;
  location?: string;
  goals?: string;
}

export interface Section {
  id: number;
  name: string;
  color_id: number;
  color: string;
  view: boolean;
}
