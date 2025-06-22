import { useState } from "react";
function Item({name}){
    const [pack,setPack]=useState(0);
    function RandomDice(){
        let num=Math.round(Math.random()*4)+1;
        setPack(num);
    }

    if(pack%4==0)
    return (<li onClick={RandomDice}>{name}⚀</li>);
    if(pack%4==1)
    return (<li onClick={RandomDice}>{name}⚁</li>);
    if(pack%4==2)
    return (<li onClick={RandomDice}>{name}⚂</li>);
    if(pack%4==3)
    return (<li onClick={RandomDice}>{name}⚃</li>);
}

export default function Backpack(){
    const items=["Money","Sun glasses","powerbank","Towel","shampoo","Wallet"];
    const filterList=items.filter(i=>i.includes("l"));
    return (<>
        <h1>Backpack List</h1>
        <ol>
            {filterList.map(i=><Item name={i}/>)}
                </ol>
            </>);
}