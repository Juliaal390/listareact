import { useState, useRef } from "react";
import Tarefas from './components/tarefas';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const inputTarefa = useRef();

  // ADICIONAR TAREFA
  const handleAddTarefa = () => {
    if (!inputTarefa.current.value) { return }; // se o campo estiver vazio, não prossegue
    setTarefas([inputTarefa.current.value, ...tarefas]);

    setCheckboxStatuses([false, ...checkboxStatuses]); //quando uma nova tarefa é criada, é adicionado o valor false (pois não está marcado o input)

    inputTarefa.current.value = ""; // limpa o input ao enviar algo
  }

  const handleCheckboxChange = (index) => { //altera o valor do checkbox em especifico
    const newCheckboxStatuses = [...checkboxStatuses]; //cria um novo array igual ao original
    newCheckboxStatuses[index] = !newCheckboxStatuses[index]; //altera o valor do checkbox especifico
    setCheckboxStatuses(newCheckboxStatuses); //atualiza o array original
  };

  const excluir = (index) => {
    const newTarefas = tarefas.filter((_, tarefaIndex) => tarefaIndex !== index);
    //filtra as tarefas com índice (tarefaIndex) diference do index
    setTarefas(newTarefas);

    const newCheckboxStatuses = checkboxStatuses.filter((_, checkboxIndex) => checkboxIndex !== index);
    setCheckboxStatuses(newCheckboxStatuses);
  }

  return (
    <>
      <Tarefas 
        tarefas={tarefas} 
        inputTarefa={inputTarefa} 
        setTarefas={setTarefas}
        setCheckboxStatuses={setCheckboxStatuses}
        handleAddTarefa={handleAddTarefa} 
        checkboxStatuses={checkboxStatuses} 
        handleCheckboxChange={handleCheckboxChange}
        excluir={excluir} 
      />
    </>
  );
}
