import logo from './logo.svg';
import './App.css';
import './mycss.css';
import { useState } from 'react';

function App() {

  const [disable,setdisable] = useState(false);
  const [b1,setb1] = useState("1");
  const [b2,setb2] = useState("2");
  const [b3,setb3] = useState("3");
  const [b4,setb4] = useState("4");
  const [b5,setb5] = useState("5");
  const [b6,setb6] = useState("6");
  const [b7,setb7] = useState("7");
  const [b8,setb8] = useState(" ");
  const [b9,setb9] = useState("8");

  function btn9(){
    if(b8 == " "){
      setb8(b9);
      setb9(" ");
    }

     else if(b8 == " "){
      setb8(b7);
      setb7(" ");
    }

    else if(b6 == " "){
      setb6(b9);
      setb9(" ");
    }
  
  }
  function btn8(){
    if(b9 == " "){
      setb9(b8);
      setb8(" ");
    }
    else if(b7 == " "){
      setb7(b8);
      setb8(" ");
    }

    else if(b5 == " "){
      setb5(b8);
      setb8(" ");
    }
    win();
  }
  function btn5(){
    if(b8 == " "){
      setb8(b5);
      setb5(" ");
    }

    else if(b6 == " "){
      setb6(b5);
      setb5(" ");
    }

    else if(b4 == " "){
      setb4(b5);
      setb5(" ");
    }

    else if(b2 == " "){
      setb2(b5);
      setb5(" ");
    }
    win();
  }

  function btn7(){
    if(b8 == " "){
      setb8(b7);
      setb7(" ");
    }

    else if(b4 == " "){
      setb4(b7);
      setb7(" ");
    }
    win();
  }

  function btn6(){
    if(b5 == " "){
      setb5(b6);
      setb6(" ");
    }

    else if(b9 == " "){
      setb9(b6);
      setb6(" ");
    }

    else if(b3 == " "){
      setb3(b6);
      setb6(" ");
    }
    win();
  }

  function btn4(){
    if(b5 == " "){
      setb5(b4);
      setb4(" ");
    }

    else if(b7 == " "){
      setb7(b4);
      setb4(" ");
    }

    else if(b1 == " "){
      setb1(b4);
      setb4(" ");
    }
    win();
  }

  function btn1(){
    if(b4 == " "){
      setb4(b1);
      setb1(" ");
    }

    else if(b2 == " "){
      setb2(b1);
      setb1(" ");
    }
    win();
  }

  function btn2(){
    if(b1 == " "){
      setb1(b2);
      setb2(" ");
    }

    else if(b5 == " "){
      setb5(b2);
      setb2(" ");
    }

    else if(b3 == " "){
      setb3(b2);
      setb2(" ");
    }
    win();
  }

  function btn3(){
    if(b2 == " "){
      setb2(b3);
      setb3(" ");
    }

    else if(b6 == " "){
      setb6(b3);
      setb3(" ");
    }
    win();
  }

  const [w,setwin] = useState(win);

  function win(){
    if(b1=="1" && b2=="2" && b3=="3" && b4=="4" && b5=="5" && b6=="6" && b7=="7" && b8=="8" && b9==" "){
      setwin("PLAYER IS GAME WIN");
      setdisable(true);
    }
  }

  function reset(){
  setb1("1");
  setb2("2");
  setb3("3");
  setb4("4");
  setb5("5");
  setb6("6");
  setb7("7");
  setb8(" ");
  setb9("8");
  setdisable(false);
  setwin(" ");
  }
  return (
    <div className="App">
      <div>
        <h1>PUZZLE GAME</h1>
      </div>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <table>
          <tr style={{display:'flex', justifyContent: 'center'}}>
            <td><input type="button"  disabled={disable} value={b1} onClick={btn1} /></td>
            <td><input type="button"  disabled={disable} value={b2} onClick={btn2} /></td>
            <td><input type="button"  disabled={disable} value={b3} onClick={btn3} /></td>
          </tr>
          <tr style={{display:'flex', justifyContent: 'center'}}>
            <td><input type="button"  disabled={disable} value={b4} onClick={btn4} /></td>
            <td><input type="button"  disabled={disable} value={b5} onClick={btn5} /></td>
            <td><input type="button"  disabled={disable} value={b6} onClick={btn6} /></td>
          </tr>
          <tr style={{display:'flex', justifyContent: 'center'}}>
            <td><input type="button"  disabled={disable} value={b7} onClick={btn7} /></td>
            <td><input type="button"  disabled={disable} value={b8} onClick={btn8} /></td>
            <td><input type="button"  disabled={disable} value={b9} onClick={btn9}/></td>
          </tr>
        </table>
        
      </div>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <tr>
          <td><input type="text" readOnly value={w} /></td>
        </tr>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>

    </div>
  );
}

export default App;
