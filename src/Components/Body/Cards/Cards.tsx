import Task from "../../../constants/Task";
import Card from "./Card";

interface CardsProps {
  data: Task[];
}

const Cards = ({ data }: CardsProps) => {
  return (
    <div className="cards-container">
      {data.map((task, id) => (
        <Card task={task} key={`task-card-${id}`} />
      ))}
    </div>
  );
};

export default Cards;
