
import { Landingpage } from './components/Landingpage'
import { NFTmarketplace } from './components/NFTmarketplace';
import { CreateNFT } from './components/CreateNFT';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <div className='h-screen w-full'>
      <Router>
        <Routes>
          <Route  path="/" element={<Landingpage />}></Route>
          <Route path="/nftmarketplace" element={<NFTmarketplace />}></Route>
          <Route path='/create' element={<CreateNFT/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App