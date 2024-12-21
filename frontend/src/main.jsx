//import chakra ui
import { Provider } from "@/components/ui/provider";
//import react router for handleling multiple pages
import {BrowserRouter} from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
