import './App.css';
import { useEffect, useState } from 'react';

var totype = 'Everyone who has been at my first secondary school can describe the discipline staff, and it likely be in a good way. They made unwise decisions such as poor reports of mistakes, one day a student was accused of having tried to poison his fellows while he had just brought chili pepp';
var toTypeCmp = totype.split(' ');

const getWordCount = (arr1) => {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === toTypeCmp[i]) {
      document.getElementById('count').style.color = 'black';
      count++;
    }
    else {
      document.getElementById('count').style.color = 'red';
      break;
    }
  }
  return count;
}

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [typed, setTyped] = useState([]);
  const [timer, setTimer] = useState(0);

  const clicked = () => {
    document.getElementById('onstart').style.display = 'none';
    setTimer(60);
  }

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      }
      else {
        document.getElementById('onstart').style = 'block';
      }
    }, 1000);
  });

  return (
    <div className="App">
      {/* <ScriptTag isHydrating={true} type="text/javascript" src=''/> */}
      <button id='onstart' onClick={clicked}>Start</button><br />
      <h1>Time : {timer}</h1>
      <input className='input' id='input' type='text' onKeyUp={(e) => {
        setTyped(e.target.value.split(' '));
        setWordCount(getWordCount(typed));
      }} />
      <h1 id='count'>{wordCount}</h1>
      <div className='toTypeCont'>
        <p className='totype'>{totype}
        </p>
      </div>
    </div>
  );
}

export default App;
