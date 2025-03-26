import './App.css'
import { Trans, useTranslation } from 'react-i18next';
import LanguageSelector from './components/languageSelector';

function App() {
  const {t}= useTranslation();
  const {line1 , line2} = t("description",{
    channel : "Aaj Tak",
  });
  return (
    <div className="container">
      <LanguageSelector></LanguageSelector>
      <h1>{t("greeting")}</h1>
      <span>
      <Trans
      i18nKey={line1}
      values={{
        channel:"Aaj Tak ",
      }}
      components={{1: <b/>}}
      >
      
      </Trans>
      </span>
      <span>{line2}</span>
    </div>
  )
}

export default App
