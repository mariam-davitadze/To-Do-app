import AddIcon from "../../../assets/icons/plus.svg";
interface AddTaskProps {
  onAddTaskRequest: () => void;
}
const AddTask = ({ onAddTaskRequest }: AddTaskProps) => (
  <button className="no-style-button add-tem-btn" onClick={onAddTaskRequest}>
    <img alt="add-item-icon" src={AddIcon} />
  </button>
);

export default AddTask;
