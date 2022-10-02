import React from 'react';

function MainContainer({ children }) {
  return (
    <div className="h-100 bg-light">
      <div className="h-100" id="chat">
        <div className="d-flex flex-column vh-100">
          {children}
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
