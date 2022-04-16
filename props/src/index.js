import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const createEelement = document.querySelector('#root')
const root = createRoot(createEelement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)