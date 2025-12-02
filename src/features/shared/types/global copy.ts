export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface AuthResponse {
  user: {
    id: number;
    uuid: string;
    name: string;
    email: string;
    image?: string; // optional because it's undefined
    role: string; // e.g. "single", "admin", etc.
    // lang: 'ar' | 'en'; // adjust if you support more languages
    is_trial: boolean;
    is_completed: boolean;
    register_completed: boolean;
    has_invitation: boolean;
    test?: string; // optional since it's undefined
  };
  accessToken: string;
  system_id: string;
  refreshExpiresAt: number;
  expiresAt: number;
}
