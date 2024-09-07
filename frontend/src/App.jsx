import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { logo } from "./assets"
import { Home, CreatePost } from "./pages/index.js"

const App = () => {
  return (
    <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} className='w-48 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
