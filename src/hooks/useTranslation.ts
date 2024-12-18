import { useAppStore } from '../store';
import { translations } from '../translations';

export const useTranslation = () => {
  const language = useAppStore((state) => state.language);
  return translations[language];
};