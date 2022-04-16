import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Testing from './components/testing/Testing'
import Think from './components/think/Think'
import Test from './components/test/Test'

const createEelement = document.querySelector('#root')
const root = createRoot(createEelement)

root.render(
    <StrictMode>
        <Testing />
        <Think />
        <Test />
    </StrictMode>
)