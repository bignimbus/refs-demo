import React from 'react';
import './App.css';

const Button = ({ onClick }) => {
  const buttonRef = React.createRef();

  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);

  return (
    <div>
      <button
        type="button"
        ref={buttonRef}
        onClick={onClick}
      >
        Click this
      </button>
    </div>
  );
};

const App = () => {
  const  [numberOfClicks, setNumberOfClicks] = React.useState(0);

  React.useEffect(() => {
  }, [numberOfClicks]);

  return (
    <div className="App">
      <div>
        <span>
          Number of clicks:
          <span>
            { numberOfClicks }
          </span>
        </span>
      </div>

      <footer>
        <Button
          onClick={() => {
            setNumberOfClicks(numberOfClicks + 1);
          }}
        />
      </footer>
    </div>
  );
}

export default App;
