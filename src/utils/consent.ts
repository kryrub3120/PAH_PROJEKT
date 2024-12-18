export const validateConsent = (consent: boolean): string | null => {
  if (!consent) {
    return 'You must accept the data processing terms to continue';
  }
  return null;
};

export const getCookieConsentStatus = (): boolean => {
  return localStorage.getItem('cookie-consent') === 'accepted';
};

export const setCookieConsentStatus = (accepted: boolean): void => {
  if (accepted) {
    localStorage.setItem('cookie-consent', 'accepted');
  } else {
    localStorage.removeItem('cookie-consent');
  }
};