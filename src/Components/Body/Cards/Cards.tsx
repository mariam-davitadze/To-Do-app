import Task from "../../../constants/Task";
import Card from "./Card";

interface CardsProps {
  data: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onComplete: (task: Task) => void;
}

const Cards = ({ data, onEdit, onDelete, onComplete }: CardsProps) => {
  return (
    <div className="cards-container">
      {data.map((task) => (
        <Card
          task={task}
          key={`task-card-${task.id}`}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
          onComplete={() => onComplete(task)}
        />
      ))}
    </div>
  );
};

export default Cards;
