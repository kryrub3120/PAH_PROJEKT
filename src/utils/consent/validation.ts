export const validateConsent = (consent: boolean): string | null => {
  if (!consent) {
    return 'You must accept the data processing terms to continue';
  }
  return null;
};