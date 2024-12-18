import { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro";
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefas) =>
      tarefas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefaSelecionada.id === tarefa.id,
      })),
    );
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
