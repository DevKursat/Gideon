export interface User {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
  }
  created_at?: string
}

export interface AuthError {
  message: string
  status?: number
}

export interface AuthResponse {
  user: User | null
  error: AuthError | null
}

export interface SignUpCredentials {
  email: string
  password: string
  fullName?: string
}

export interface SignInCredentials {
  email: string
  password: string
}
