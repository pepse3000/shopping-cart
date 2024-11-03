import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import {StoreProvider} from "app/providers/StoreProvider";

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
