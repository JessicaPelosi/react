// Atividade 1:
// Faça as alterações necessárias no projeto criado para 
// incluir o exemplo da aula passada (Data e hora) como 
// um novo componente dentro da sua aplicação.

function Calendario() {

    var data = new Date(Date());
    
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    return (
    <div>
        <p style={{textTransform: 'uppercase'}}>{data.toLocaleDateString('pt-br', options)}</p>
    </div>
   )
}
export default Calendario;