import './Hello.css';
export default function Hello({name="Sirachat",surname="Kueama",weight="70"}) {  
        return (
        <><img src="yut.png" width="200" height="200" /><h1>Hello,{name}
                        {surname}
                        {weight}
                </h1></>
        );
}
