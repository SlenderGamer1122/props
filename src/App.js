
import './App.css';
import ProductCard from './Components/ProductCard';
import Title from './Components/Title';

function App() {
  let myStyle={display:'flex' , justifyContent:'space-between' }
  return (
    <div style={myStyle} className="App">
    <Title TitleStyle={{color:'red'}} />
    <ProductCard brand='Porsche' model='Carrera GT'> <img alt='car' src='https://cdn.motor1.com/images/mgl/RGzRr/s3/porsche-carrera-gt-del-2005-con-soli-550-km.jpg'/>   </ProductCard>
    <ProductCard brand='Porsche' model='911 Gt3 RS'> <img alt='car' src='https://www.topgear.com/sites/default/files/2022/08/CFM_2719.jpg'/>   </ProductCard>
    <ProductCard brand='Porsche' model='Spider 918'> <img alt='car' src='https://cdn.automobile-propre.com/uploads/2016/02/porsche-918-spyder-0011-620x413.jpg'/>   </ProductCard>
    </div>
  );
}

export default App;
