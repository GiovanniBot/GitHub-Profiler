import { Router } from '@/Router'
import '@/styles/global.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="gp-ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            color: 'hsl(var(--primary))',
            background: 'hsl(var(--secondary))',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App
