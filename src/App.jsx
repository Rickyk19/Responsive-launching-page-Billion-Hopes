import React from 'react';

const App = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    margin: '0',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '60%'
  };

  const logoStyle = {
    width: '100%',
    maxHeight: '60vh',
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
    letterSpacing: '0.05em',
    width: '100%',
    position: 'relative',
    transform: 'translateX(8%)'
  };

  // Global styles reset
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
    }
    
    #root {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
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