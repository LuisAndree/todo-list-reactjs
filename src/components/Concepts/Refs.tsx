import { FormEvent, useRef, useState } from "react";

export const Refs: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null); // { current: 0}
    const [toggle, setToggle] = useState(false);

    function handleOnSubmit(event: FormEvent) {
            event.preventDefault() // evita que a pagina seja recarregada ao submeter o formulario
            console.log('submeteu');
            console.log(inputNameRef.current?.value);
            console.log(inputEmailRef.current?.value);
            console.log(inputPasswordRef.current?.value);
    }

    return (
        <form style={{ padding: "2rem" }} onSubmit={(event) => handleOnSubmit(event)}>
            <h1>useRef</h1>
            <br />
            <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
            <input type="email" placeholder="E-mail" ref={inputEmailRef} />
            <input type="password" placeholder="Senha" ref={inputPasswordRef} />
            <br />
            <button type="submit"> Submeter </button>
        </form>
    );
};