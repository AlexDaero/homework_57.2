import React from 'react';
import './App.css';
import Alert from './components/UI/Alert/Alert';

function App() {
  
  return (
    <div className="App">
      <Alert
        type='warning'
        dismiss={()=>alert('вы нажали закрыть')}
        clickDismissable={()=>alert('вы нажали на alert')}
      >This is a warning type alert</Alert>
      <Alert
        type='success'
        clickDismissable={()=>alert('вы нажали на alert')}
      >This is a success type alert</Alert>
    </div>
  );
}

export default App;
