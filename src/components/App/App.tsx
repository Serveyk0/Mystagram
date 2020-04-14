import React from 'react';

export const App: React.FC = ( {children}:any ) => {
  return (
      <div className="App">
        {children}
      </div>
  );
}