import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConsentState {
  hasAcceptedCookies: boolean;
  hasAcceptedDataProcessing: boolean;
  acceptCookies: () => void;
  acceptDataProcessing: () => void;
  resetConsent: () => void;
}

export const useConsent = create<ConsentState>()(
  persist(
    (set) => ({
      hasAcceptedCookies: false,
      hasAcceptedDataProcessing: false,
      acceptCookies: () => set({ hasAcceptedCookies: true }),
      acceptDataProcessing: () => set({ hasAcceptedDataProcessing: true }),
      resetConsent: () => set({ 
        hasAcceptedCookies: false, 
        hasAcceptedDataProcessing: false 
      }),
    }),
    {
      name: 'consent-storage',
      version: 1,
    }
  )
);