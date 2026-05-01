import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import Aition from './pages/Aition'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Metamorphoses from './pages/Metamorphoses'
import NotFound from './pages/NotFound'
import PoetaDoctus from './pages/PoetaDoctus'
import Stilistik from './pages/Stilistik'
import Story from './pages/Story'
import TextViewer from './pages/TextViewer'
import GesamteGeschichte from './pages/GesamteGeschichte'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="geschichte" element={<Story />} />
          <Route path="metamorphosen" element={<Metamorphoses />} />
          <Route path="charaktere" element={<Characters />} />
          <Route path="text-viewer" element={<TextViewer />} />
          <Route path="stilistik" element={<Stilistik />} />
          <Route path="poeta-doctus" element={<PoetaDoctus />} />
          <Route path="aition" element={<Aition />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gesamtegeschichte" element={<GesamteGeschichte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
