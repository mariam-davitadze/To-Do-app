import Task from "../../../constants/Task";
import Card from "./Card";

interface CardsProps {
  data: Task[];
  onEdit: (task: Task) => void;
}

const Cards = ({ data, onEdit }: CardsProps) => {
  return (
    <div className="cards-container">
      {data.map((task, id) => (
        <Card task={task} key={`task-card-${id}`} onEdit={() => onEdit(task)} />
      ))}
    </div>
  );
};

export default Cards;
