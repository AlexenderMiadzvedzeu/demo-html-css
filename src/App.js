import logo from './logo.svg';
import './App.css';

const ELEMENTS_WITH_BOTH_CLASSES = `
  <div>
    <p class='primary' class='secondary'>This element with both classes. "primary" is last</p>
    <p class='secondary' class='primary'>This element with both classes. "secondary" is last</p>
  </div
`

function App() {
  return (
    <div className='main'>
      <p className='primary'>This element only with "primary" class name</p>
      <p className='secondary'>This element only with "secondary" class name</p>
      <div 
        dangerouslySetInnerHTML={{
            __html: ELEMENTS_WITH_BOTH_CLASSES
          }}
      />
      <img src='./code.png' />
    </div>
  );
}

export default App;
