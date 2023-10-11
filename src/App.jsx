
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./assets/Components/HomePage"
import MovieDetails from "./assets/Components/MovieDetails"


function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <h2 className='text-center text-white pt-4'>
          My Movie App
        </h2>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
