import React from 'react';

const App = () => {
  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    margin: '0',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    boxSizing: 'border-box'
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '90%',
    width: '100%'
  };

  const logoStyle = {
    maxWidth: '100%',
    maxHeight: '50vh',
    height: 'auto',
    display: 'block',
    objectFit: 'contain'
  };

  const textStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontWeight: '500',
    textAlign: 'center',
    margin: '0',
    marginTop: '20px',
    letterSpacing: '0.05em'
  };

  // Global styles reset
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
    
    #root {
      width: 100%;
      min-height: 100vh;
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      <div style={containerStyle}>
        <div style={contentWrapperStyle}>
          <img 
            src="/logo.png" 
            alt="Billion Hopes Logo" 
            style={logoStyle}
          />
          <p style={textStyle}>Launching soon</p>
        </div>
      </div>
    </>
  );
};

export default App; 