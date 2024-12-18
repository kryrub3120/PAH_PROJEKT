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