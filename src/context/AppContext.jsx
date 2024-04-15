// LanguageContext.jsx
import React, {createContext, useState, useContext} from 'react';
import i18n, {changeLanguage} from '../components/i18Instance';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = async lng => {
    await changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider
      value={{language, changeLanguage: handleChangeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
