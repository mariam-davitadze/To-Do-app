import Task from "../../../constants/Task";
import editIcon from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import checkMarkIcon from "../../../assets/icons/check.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";
import { useState } from "react";

interface CardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onComplete: () => void;
}

const Card = ({ task, onEdit, onDelete, onComplete }: CardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const onExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="flex sp-btw" onClick={onExpand}>
        <div className="title">{task.title}</div>
        <button
          className={`no-style-button ${
            isOpen ? "arrow-btn" : "rotated-arrow-btn"
          }`}
        >
          <img alt="arrow-icon" src={arrowIcon} />
        </button>
      </div>
      {isOpen && (
        <>
          <div className="details">{task.description}</div>
          <div className="controls">
            <div>
              {!task.isCompleted && (
                <button className="no-style-button" onClick={onEdit}>
                  <img alt="edit-task-icon" src={editIcon} />
                </button>
              )}
              <button className="no-style-button" onClick={onDelete}>
                <img alt="delete-task-icon" src={deleteIcon} />
              </button>
            </div>
            <div>
              <button
                className="no-style-button flex complete-task"
                disabled={task.isCompleted}
                onClick={onComplete}
              >
                <div>{task.isCompleted ? "Completed" : "Mark completed"}</div>
                <img alt="checkmark-icon" src={checkMarkIcon} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
