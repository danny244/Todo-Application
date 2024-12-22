import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ErrorBoundary } from './ErrorBoundaries.jsx'
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from './components/ErrorComponent.jsx';
import { BrowserRouter } from 'react-router';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary FallbackComponent={ErrorComponent}>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
)
