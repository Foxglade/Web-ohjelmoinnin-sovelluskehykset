import React from "react";

export default function Header() {
return (
<div className="headerOuter">
    <div className="headerInner"> 
        <div className="logoElement"><img src="/logo.png" alt="kuva" /></div>
        <div className="menuElement">Etusivu</div>
        <div className="menuElement">Uutiset</div>
        <div className="menuElement">Lehdet</div>
        <div className="menuElement">Asiakaspalvelu</div>
        <div className="tilaaElement">Tilaa</div>
        <div className="menuElement">Kirjaudu</div>
        <div className="valikkoElement">Valikko</div>
    </div>

</div>
);

}