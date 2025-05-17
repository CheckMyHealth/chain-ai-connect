
export type Profile = {
  id: string;
  full_name: string | null;
  company_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  website: string | null;
  blockchain_preference: string[] | null;
  partnership_interests: string[] | null;
  created_at: string;
  updated_at: string;
}

export type Project = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  company: string;
  website: string | null;
  logo_url: string | null;
  partnership_type: string[];
  blockchain: string;
  requirements: string;
  benefits: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export type Match = {
  id: string;
  project_id: string;
  user_id: string;
  match_score: number;
  status: string;
  created_at: string;
  updated_at: string;
}
