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
      {/* {data[0] && <Card task={data[0]} key="card" />} */}
    </div>
  );
};

export default Cards;
