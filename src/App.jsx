import { useState, useRef } from "react";
import Tarefas from './components/tarefas';

export default function App(){
  const [tarefas, setTarefas] = useState([]);
  const inputTarefa = useRef();

  //ADICIONAR TAREFA
  const handleAddTarefa =()=>{
    if(!inputTarefa.current.value){return}; //se o campo estiver vazio, não prossegue
    setTarefas([inputTarefa.current.value, ...tarefas]);
    inputTarefa.current.value=""; //limpa o input ao enviar algo
  }

  return(
    <>
    <Tarefas tarefas={tarefas} inputTarefa={inputTarefa} handleAddTarefa={handleAddTarefa}/>
    </>
  );
}
