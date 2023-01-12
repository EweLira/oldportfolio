import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';
import { TypeAnimation } from 'react-type-animation';

function App() {
 
  return (
    <div id= "portfolio">
       <h1>Ewellyn Lira</h1>
       <h3>
       <div>
          <TypeAnimation
            sequence={[
              'Desenvolvedora',
              1000, 
              ' ', 
              2000, 
              'Desenvolvedora', 
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          /> 
      </div>
      </h3>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
