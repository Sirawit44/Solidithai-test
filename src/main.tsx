import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  // This will start the service worker
  import('./mocks/browser').then(({ worker }) => {
      worker.start();
  });
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
