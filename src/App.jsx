import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export default function App() {
  const [ result, setResult ] = useState('0');
  const [ firstValue, setFirstValue ] = useState(0);
  const [ secondValue, setSecondValue ] = useState(0);

  const [ operation, setOperation ] = useState('');

  const handleCalculator = (n) => {
    if( operation === "" ) {
      setFirstValue(parseInt(firstValue.toString() + n.toString()));
      setResult(parseInt(firstValue.toString() + n.toString()));
    }

    if( (n == '+' || n == '-' || n == '*' || n == '/') && secondValue == 0 ) {
      setResult(firstValue.toString() + n);
      setOperation(n);
    }

    if( operation != "" ) {
      setSecondValue(parseInt(secondValue.toString() + n.toString()));
      setResult(firstValue + operation + parseInt(secondValue.toString() + n.toString()));
    }

    if( n == "=" ) {
      let result = 0;
      if( operation == '+' ) {
        result = firstValue + secondValue;

      } else if( operation == '-' ) {
        result = firstValue - secondValue;

      } else if( operation == '/' ) {
        result = firstValue / secondValue;

      } else if( operation == '*' ) {
        result = firstValue * secondValue;

      }

      setResult(result);
    }
  }

  const handleClear = () => {
    setFirstValue('0');
    setSecondValue('');
    setResult('0');
    setOperation('');
  }

  return (
    <main className="h-screen w-full flex justify-center items-center bg-slate-900">
      <div className="min-h-[360px] max-w-xl bg-slate-600">
        <Input value={result}/>
        <div className="grid grid-cols-4 flex-row">
          <Button title="7" onClick={() => handleCalculator('7')}/>
          <Button title="8" onClick={() => handleCalculator('8')}/>
          <Button title="9" onClick={() => handleCalculator('9')}/>
          <Button title="C" onClick={handleClear}/>
          <Button title="4" onClick={() => handleCalculator('4')}/>
          <Button title="5" onClick={() => handleCalculator('5')}/>
          <Button title="6" onClick={() => handleCalculator('6')}/>
          <Button title="-" onClick={() => handleCalculator('-')}/>
          <Button title="1" onClick={() => handleCalculator('1')}/>
          <Button title="2" onClick={() => handleCalculator('2')}/>
          <Button title="3" onClick={() => handleCalculator('3')}/>
          <Button title="+" onClick={() => handleCalculator('+')}/>
          <Button title="*" onClick={() => handleCalculator('*')}/>
          <Button title="0" onClick={() => handleCalculator('0')}/>
          <Button title="/" onClick={() => handleCalculator('/')}/>
          <Button title="=" onClick={() => handleCalculator('=')}/>
        </div>
      </div>
    </main>
  )
}