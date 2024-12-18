import { create } from 'zustand';
import { ChildData, ParentData, User, Language } from '../types';
import { HeightPrediction } from '../types/prediction';

interface AppState {
  language: Language;
  user: User | null;
  childData: ChildData;
  parentData: ParentData;
  prediction: HeightPrediction | null;
  setLanguage: (language: Language) => void;
  setUser: (user: User | null) => void;
  setChildData: (data: Partial<ChildData>) => void;
  setParentData: (data: Partial<ParentData>) => void;
  setPrediction: (prediction: HeightPrediction | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  user: null,
  childData: {
    currentHeight: 100,
    weight: 30,
    age: 8,
    birthDate: new Date().toISOString().split('T')[0],
    sex: 'male',
  },
  parentData: {
    fatherHeight: 175,
    motherHeight: 165,
  },
  prediction: null,
  setLanguage: (language) => set({ language }),
  setUser: (user) => set({ user }),
  setChildData: (data) => set((state) => ({
    childData: { ...state.childData, ...data },
  })),
  setParentData: (data) => set((state) => ({
    parentData: { ...state.parentData, ...data },
  })),
  setPrediction: (prediction) => set({ prediction }),
}));