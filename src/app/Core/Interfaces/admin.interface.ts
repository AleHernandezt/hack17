export interface Admin {
  id?: number;
  first_name: string;
  last_name: string;
  cedula: string;
  email: string;
  status: 'active' | 'inactive' | 'deleted';
  userType: 'admin' | 'donor';
}

export interface Login {
  email: string;
  password: string;
}

export interface loginResponse {
  message: string;
  data: {
    Admin: Admin;
    token: string;
  };
}
