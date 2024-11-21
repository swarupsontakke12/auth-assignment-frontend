export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  statusCode: number;
  [key: string]: any;
}

export interface RegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  message: string;
  statusCode: number;
  userInfo: object;
}
