interface Activity {
  id: string;
  name: string;
}
export interface UserI {
  id: string;
  in_ksa: boolean;
  username: string;
  company_name: string;
  company_description: string;
  company_phone: string;
  personal_phone: string;
  email: string;
  is_employee: boolean | 0 | 1;
  department: string | null;
  department_id: string | null;
  activities: Activity[];
  area_id: string;
  area: string;
  location: string;
  latitude: string; // consider converting to number if you use it for maps
  longitude: string;
  employees_count: number;
  commercial_register: string;
  tax_register: string;
  profile_image: string;
  cover_image: string | null;
  profile_image_url: string;
  commercial_register_image: string;
  cr_expiry_date: string; // or Date
  followers_count: number;
  followings_count: number;
  qr_image: string;
  qr_share_url: string;
  created_at: string; // or Date
}

export interface CompanyUserI {
  company: UserI;
  unreadCount: number;
}
