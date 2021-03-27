import React, { useEffect, useState } from 'react';
import Particle from './TsParticles';
import './App.css';

const App = () => {
    var [exp, setExp] = useState('');
    var [value, setValue] = useState('');
    var [result, setResult] = useState('');

    const onClickHandler = (e) => {
        setValue(value = e.target.innerHTML);
        handleExp();
        console.log(exp[exp.length-1]);
        if(exp[exp.length-1] !== "+" && exp[exp.length-1] !== "-" && exp[exp.length-1] !== "/" && exp[exp.length-1] !== "*" && exp[exp.length-1] !== "%" && exp[exp.length-1] !== "."){
            // console.log(exp);
            calcResult();
        }
        // console.log(e.target.innerHTML);
    }
    
    const handleExp = () => {
        if(exp.length < 2){
            if(exp.length == 0 && (value == "+" || value == "-" || value == "/" || value == "*" || value == "%")){
                //to avoid adding operands at the first index
            } else{
                setExp(exp = exp+value);
            }
        }
        else{
            if(exp[exp.length-1] == "+" || exp[exp.length-1] == "-" || exp[exp.length-1] == "/" || exp[exp.length-1] == "*" || exp[exp.length-1] == "%"){
                if(value !== "+" && value !== "-" && value !== "/" && value !== "*" && value !== "%"){
                    setExp(exp = exp+value);
                } 
            }else{
                setExp(exp = exp+value);
            }
        }
        // console.log(typeof exp);
        console.log(exp);
    }
    const calcResult =() => {
            setResult(result = eval(exp)); 

    }
    const clearAllHandler = () => {
        setExp(exp="");
        setResult(result="");
    } 
    const clearOneElementHandler = () => {
        setExp(exp = exp.substring(0,exp.length-1));
        if(exp[exp.length-1] !== "+" && exp[exp.length-1] !== "-" && exp[exp.length-1] !== "/" && exp[exp.length-1] !== "*" && exp[exp.length-1] !== "%"){
            console.log(exp);
            calcResult();
        }
        console.log(exp);
    }
    const calculate = () => {
        if(exp.length !== 0){
            if(exp[exp.length-1] !== "+" && exp[exp.length-1] !== "-" && exp[exp.length-1] !== "/" && exp[exp.length-1] !== "*" && exp[exp.length-1] !== "%" && exp[exp.length-1] !== "."){
            setResult(result="");
            setExp(exp = eval(exp).toString());
        }
    }
}
    const bracketHandler = () => {
    }
  

    return (
            <div>
            <Particle />
            <div className="container">
                <div className="output">
                    <p><input value={exp} style={{background:"transparent", border:"none", color:"white", padding:0, width:"280px", outline:"none"}}/></p>
                    <p style={{position:"absolute", right:0}}>{result}</p>
                </div>
                <div className="input">
                <button 
                    className="elemnt clear btn " type="button" onClick={() => clearAllHandler()}>C
                </button>
                <button
                    className="elemnt clear btn " type="button" onClick={() => clearOneElementHandler()}>CE
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>%
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>/
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>7
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>8
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>9
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>*
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>4
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>5
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>6
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>-
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>1
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>2
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>3
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>+
                </button>
                <button
                    className="elemnt btn " type="button" onClick={() => bracketHandler()}>( )
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>0
                </button>
                <button
                    className="elemnt btn " type="button" onClick={(e) => onClickHandler(e)}>.
                </button>
                <button
                    className="elemnt btn " type="button" onClick={() => calculate()}>=
                </button>
                </div>
            </div>
        </div>
    )
}

export default App;