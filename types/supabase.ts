export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          email: string
          id: string
          password_hash: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          email: string
          id: string
          password_hash: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          email?: string
          id?: string
          password_hash?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      logo_detections: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          description: string
          id: string
          score: number
          updated_at: string | null
          uploaded_image_id: string
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          description: string
          id: string
          score: number
          updated_at?: string | null
          uploaded_image_id: string
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          description?: string
          id?: string
          score?: number
          updated_at?: string | null
          uploaded_image_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "logo_detections_uploaded_image_id_fkey"
            columns: ["uploaded_image_id"]
            referencedRelation: "uploaded_images"
            referencedColumns: ["id"]
          }
        ]
      }
      uploaded_images: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          file_name: string
          file_path: string
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          file_name: string
          file_path: string
          id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          file_name?: string
          file_path?: string
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "uploaded_images_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          email: string
          id: string
          name: string
          password_hash: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          email: string
          id: string
          name: string
          password_hash: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          email?: string
          id?: string
          name?: string
          password_hash?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

