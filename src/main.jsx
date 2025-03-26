import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback="loading..">
      <App />
    </React.Suspense>
  </StrictMode>,
)
