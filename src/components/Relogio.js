// Atividade 1:
// Faça as alterações necessárias no projeto criado para 
// incluir o exemplo da aula passada (Data e hora) como 
// um novo componente dentro da sua aplicação.

import React, { useState, useEffect } from 'react';

function Relogio() {
    var [hora, setTime] = useState(new Date());

    useEffect(() => {
        var horaID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(horaID);
        };
    }, []);

    return (
        <div>
            
            <p>{hora.toLocaleTimeString('pt-br')}</p>
        </div>
    );
}

export default Relogio;