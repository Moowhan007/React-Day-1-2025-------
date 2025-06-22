import { useState}from"react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("type here!");
    function onTextChange(event){
        console.log("this function is called!"+event.target.value);
        console.error("THIS IS ERROR");
        setValue(event.target.value);
    }
    return (<>
      <input value={value} onChange={(event)=>onTextChange(event)}/> พิมพ์เลขตรงนี้
      <p>you type {value.length} characters</p>
        <p>{value} Celcius to {value*1.8+32} Fahrenheit </p>
        <p>{value} Kilometers to {value*0.62137119} Miles </p>
        <p>{value} Dollar to {value*32.77} Baht</p>
        <p>{value} Belly to {value*0.000372} Yen</p>

      <button onClick={()=>setCount(count+1)}>
        Click me (+)
        </button>

        <button onClick={()=>setCount(count-1)}>
        Click me (-)
        </button>
        
        <button onClick={()=>setCount(0)}>
        Click me (reset)
        </button>

        <p>You click {count} times
        </p>
        
        
    </>);
}
