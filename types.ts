export enum Sender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  quick_replies?: QuickReply[];
  product_recommendation_id?: string;
  tip_key?: string;
}

export interface QuickReply {
  text_pt: string;
  payload: string; // Could be next_step_id or a command
  action_type: 'next_step' | 'product_info' | 'custom_action';
  points?: number;
  tip_key?: string;
}

export enum ProductCategory {
  RESINAS_ACRILICAS = "Resinas Acrílicas e Líquidos",
  CERAS = "Ceras e Placas Base",
  ABRASIVOS = "Abrasivos e Polidores",
  ACESSORIOS = "Acessórios e Kits",
  BLOCOS_CADCAM = "Blocos CAD/CAM",
  DENTES_ACRILICOS = "Dentes Acrílicos",
  ISOLANTES_OPACIFICADORES = "Opacificadores", // Renamed slightly as Isolantes are out
  LIGANTES_GLAZE = "Ligantes e Glaze",
  REMOVEDORES_LIMPADORES = "Removedores e Limpadores",
}

export interface Product {
  id: string;
  name_pt: string;
  category: ProductCategory;
  description_pt: string;
  usage_tips_pt?: string[];
  image_url?: string;
}

export interface Achievement {
  id: string;
  name_pt: string;
  description_pt: string;
  icon: string; 
  points_required?: number;
  unlocked: boolean;
}

export interface GameState {
  score: number;
  achievements: Achievement[];
}

export interface GuidedCaseStep {
  id: string;
  bot_question_pt: string;
  options?: Array<{ text_pt: string; next_step_id?: string | null; product_recommendation_id?: string; points?: number; tip_key?: string; achievement_unlock_id?: string }>;
  is_final_step?: boolean;
  action?: () => void; // For custom actions if needed
  achievement_unlock_id?: string; 
}

export interface GuidedCase {
  id: string;
  name_pt: string;
  description_pt: string;
  start_step_id: string;
  steps: Record<string, GuidedCaseStep>;
  icon?: React.ReactNode;
}

export type AppView = 'chat' | 'catalog' | 'guided_case_selection' | 'in_guided_case';

export interface PrimavitaTip {
  key: string;
  text_pt: string;
  emoji?: string;
}