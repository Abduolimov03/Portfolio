import {Home} from './Component/Home'
import {Header} from './Component/Header'
import {Footer} from './Component/Footer'
// import img1 from './media/Ellipse.png';

function App() {
  return (
    <div className='container'>
   
      <Header/>
      <Home/>
      <Footer/>
      {/* <img src={img1} alt="rasm"/> */}
      
    </div>
  )
}

export default App;
