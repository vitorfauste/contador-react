import { useState } from "react";

export default function App() {
    const [numero, setNumero] = useState(0);

    function somar() {
        setNumero(numero + 1);
    }

    function subtrair() {
        setNumero(numero - 1);
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
    </section>
}