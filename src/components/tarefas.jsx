export default function Tarefas({tarefas, inputTarefa, handleAddTarefa}) {
 
  return (
    <>
      <div>
        <input type="text" placeholder="Escrever tarefa" ref={inputTarefa} />
        <button onClick={handleAddTarefa}>+</button>

        <div>
          {tarefas.map((tarefa, id) => (
            <div key={id}>
              <input type="checkbox"/>
              <label>{tarefa}</label>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
