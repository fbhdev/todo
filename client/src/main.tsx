import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import {QueryClientProvider, QueryClient} from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
)
