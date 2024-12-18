import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionarTarefa: (tarefa: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionarTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado && style.itemSelecionado}`}
      onClick={() =>
        selecionarTarefa({ tarefa, tempo, id, completado, selecionado })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
