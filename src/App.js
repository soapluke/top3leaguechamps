import React from 'react';
import Search from './Search';

const divStyle = {
  textAlign: 'center',
  backgroundColor: '#304f82',
  minHeight: '100vh'
}

const headerStyle = {
  
}

const App = () => {

  return (
    <div style={divStyle}>
      <header style={headerStyle}>
        <Search />
      </header>
        
    </div>
  );
}

export default App;
