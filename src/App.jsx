import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// RootLayout
import RootLayout from './components/RootLayout'
import HelpLayout from './components/HelpLayout'
import CareersLayout from './components/CareersLayout'

// Components
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Careers, { careersLoader } from './components/Careers'
import CareerDetails, { careerDetailsLoader } from './components/CareerDetails'
import CareersError from './components/CareersError'

// Help
import Contact, { contactAction } from './components/help/Contact'
import Faq from './components/help/Faq'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/react-route/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}/>
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />} >
        <Route 
          index 
          element={<Careers />}
          loader={careersLoader} 
        />
        <Route 
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} /> 
  )
}

export default App
