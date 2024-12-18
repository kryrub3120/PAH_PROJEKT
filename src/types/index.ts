export interface ChildData {
  currentHeight: number;
  weight: number;
  age: number;
  birthDate: string;
  sex: 'male' | 'female';
}

export interface ParentData {
  fatherHeight: number;
  motherHeight: number;
}

export type Language = 'en' | 'es' | 'pl';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Translations {
  // ... existing translations ...
  relativeAgeEffect: string;
  birthDate: string;
  dayOfYear: string;
  quarterBorn: string;
  q4Alert: string;
}