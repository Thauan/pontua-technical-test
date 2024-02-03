import { AppProvider } from './components/AppProvider'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
      <GlobalStyle />
    </>
  )
}

export default App
