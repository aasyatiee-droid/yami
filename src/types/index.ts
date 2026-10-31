export type Gender = 'lelaki' | 'perempuan';
export type SkinTone = '#FEE3D4' | '#FCD0B4' | '#E8AF87' | '#B8784E';

export interface AvatarState {
  name: string;
  gender: Gender;
  skinTone: SkinTone;
  hairStyle: string;
  top: string;
  bottom: string;
  headwear: string;
  accessories: string[];
  coins: number;
  completedTasks: string[];
}

export interface WardrobeItem {
  id: string;
  name: string;
  category: 'tudung' | 'baju' | 'jubah' | 'kain' | 'seluar' | 'aksesori';
  forGender: Gender | 'both';
  icon: string;
  color: string;
  syarakCompliant: boolean;
  reason: string;
  imageOrSvgType: string;
}

export interface RoomTask {
  id: string;
  roomId: 'ruang_tamu' | 'bilik_tidur' | 'dapur' | 'bilik_air' | 'bilik_ilmu';
  title: string;
  description: string;
  adabTip: string;
  coinsReward: number;
  isCompleted: boolean;
}

export interface NoteCard {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  content: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  bulletPoints: string[];
  keyTakeaway: string;
  colorTheme: 'lavender' | 'pink' | 'blue' | 'mint' | 'cream';
  audioNarrationText: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'maksud' | 'hukum' | 'dalil' | 'ciri_pakaian' | 'adab_doa' | 'situasi';
  type: 'multiple_choice' | 'true_false' | 'scenario';
}

export interface CustomLinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  badge: string;
  color: string;
}

export interface ReflectionSubmission {
  id: string;
  pupilName: string;
  date: string;
  selectedCheckboxes: string[];
  writtenAnswer: string;
  committedAction: string;
}

export type ActiveTab = 'nota' | 'quiz' | 'refleksi';
