import * as React from 'react'
import { createRoot } from 'react-dom/client'
import AppWrapper from "./appWrapper.jsx"

const root = createRoot(document.querySelector("#root"))

root.render(<AppWrapper />)