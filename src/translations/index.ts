import { Translations } from '../types';

export const translations: Record<string, Translations> = {
  en: {
    // App title
    title: 'Adult Height Predictor',
    subtitle: 'Accurately predict your child\'s adult height',
    
    // Calculator section
    childInfo: 'Child Information',
    parentInfo: 'Parent Information',
    height: 'Height',
    weight: 'Weight',
    birthDate: 'Birth Date',
    sex: 'Sex',
    male: 'Male',
    female: 'Female',
    fatherHeight: "Father's Height",
    motherHeight: "Mother's Height",
    
    // Units
    cm: 'cm',
    kg: 'kg',
    years: 'years',
    
    // RAE section
    relativeAgeEffect: 'Relative Age Effect',
    dayOfYear: 'Day of Year',
    quarterBorn: 'Quarter Born',
    q4Alert: 'Born in Q4 - relatively younger in the age group',
    
    // Method explanation
    aboutMethod: 'About the Method',
    methodTitle: 'Scientific Height Prediction',
    methodology: 'Our Methodology',
    methodDescription: 'Using validated research and advanced algorithms',
    methodExplanation: 'The Khamis-Roche method is a scientifically validated approach for predicting adult height based on current measurements and genetic factors.',
    scientificMethod: 'Scientific Method',
    scientificMethodDesc: 'Based on the Khamis-Roche method, a validated approach for height prediction',
    accuratePredictions: 'Accurate Predictions',
    accuratePredictionsDesc: 'Utilizing statistical models and growth data for reliable results',
    
    // Growth factors
    growthFactorsTitle: 'Factors Affecting Growth',
    nutrition: 'Nutrition',
    nutritionDesc: 'Proper nutrition is crucial for optimal growth',
    exercise: 'Physical Activity',
    exerciseDesc: 'Regular exercise supports healthy development',
    sleep: 'Rest & Sleep',
    sleepDesc: 'Adequate sleep is crucial for growth hormone production',
    
    // Buttons
    calculate: 'Calculate',
    calculating: 'Calculating...',
    getPdfReport: 'Get Detailed PDF Report',
    
    // Results
    predictedAdultHeight: 'Predicted Adult Height',
    predictionRange: 'Estimated Range',
    growthProgress: 'Growth Progress',
    timeToFinalHeight: 'Time to Final Height',
    estimatedTimeRemaining: 'Estimated time remaining until final height',
    estimatedCompletion: 'Estimated completion',
    currentHeight: 'Current Height',
    
    // Navigation
    calculator: 'Calculator',
    about: 'About',
    store: 'Products',
    login: 'Sign In',
    register: 'Sign Up',
    logout: 'Sign Out',
    profile: 'Profile',
  },
  // Add other languages as needed
  es: {
    // Spanish translations
  },
  pl: {
    // Polish translations
  }
};