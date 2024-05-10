import logo from './logo.svg';
import './App.css';
import cubes from './cubes';

function App() {
  
  const totalVariants = cubes.reduce((total, cube) => total + cube.variants.length, 0);
  const totalCubes = cubes.length;
  
  return (

    <div className="App">
      
      <p className='p-5'><h1>How many 3x3s has Moyu released since the last Sq-1?</h1></p>

      <h1 className='display-1'>{totalCubes} different 3x3s</h1>
      <h2 className='display-2'>In {totalVariants} variants</h2>

      <br></br>
      <ul className='list-group m-5 p-5'>
        {cubes.map(cube => (
          <li key={cube.id} className='list-group-item'>
            <b>{cube.text}</b>
            {cube.variants.length > 1 && (
              <div className='list-group d-flex flex-row justify-content-evenly'>
                {cube.variants.map((variant, index) => (
                  <a key={index}>{variant}</a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
        
      <h2 className='display-4'>Moyu, seriously. Stop</h2>
      <p className='lead'>And there are already other 3x3s leaked</p>
      <p>Let me know if I missed something, I probably did</p>
    
    </div>
  );
}

export default App;
