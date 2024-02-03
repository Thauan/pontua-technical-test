import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './components/AppProvider'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
