import React from "react";
import style from "./Lista.module.scss";
import Item from "./Item";

function Lista() {
  const tarefas = [
    { tarefa: "AAA", tempo: "01:00:00" },
    { tarefa: "BBB", tempo: "01:30:00" },
    { tarefa: "CCC", tempo: "02:00:00" },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
