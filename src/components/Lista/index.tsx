import React from "react";
import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefa: ITarefa) => void;
}

function Lista({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2 className={style.titulo}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionarTarefa={selecionarTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
