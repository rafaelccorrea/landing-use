import Hero from './components/Hero'
import Resultados from './components/Resultados'
import Casos from './components/Casos'
import MetodoMuda from './components/MetodoMuda'
import ComoFunciona from './components/ComoFunciona'
import Transformacao from './components/Transformacao'
import Depoimentos from './components/Depoimentos'
import Sobre from './components/Sobre'
import FormCaptacao from './components/FormCaptacao'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <main>
        <Hero />
        <Resultados />
        <Casos />
        <MetodoMuda />
        <ComoFunciona />
        <Transformacao />
        <Depoimentos />
        <Sobre />
        <FormCaptacao />
      </main>
      <Footer />
    </>
  )
}

export default App
