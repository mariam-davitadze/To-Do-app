import Task from "../../constants/Task";
import ModalMode from "../../constants/ModalMode";
import CloseIcon from "../../assets/icons/close.svg";
import "./Modal.css";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import useDebouncedCallback from "../hooks/useDebouncedCallback";

interface ModalProps {
  mode: ModalMode;
  onSave: (task: Task) => void;
  onClose: () => void;
  task?: Task;
}

const Modal = ({ mode, onSave, onClose, task }: ModalProps) => {
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    isCompleted: false,
  });

  useEffect(() => {
    if (task) {
      setNewTask({ ...task });
    }
  }, [task]);

  const onNameChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNewTask({ ...newTask, title: e.target.value });
    }
  );

  const onDescriptionChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setNewTask({ ...newTask, description: e.target.value });
    }
  );

  const isDataValid = useMemo(() => {
    if (!(newTask.title.trim() && newTask.description.trim())) {
      return false;
    }
    if (mode === ModalMode.add) {
      return true;
    }
    if (
      newTask.title !== task!.title ||
      newTask.description !== task!.description
    ) {
      return true;
    }
    return false;
  }, [newTask, task, mode]);

  const handleSave = () => {
    if (!isDataValid) {
      return;
    }
    const trimmedData = {
      ...newTask,
      title: newTask.title.trim(),
      description: newTask.description.trim(),
    };
    if (mode === ModalMode.edit) {
      onSave(trimmedData);
      return;
    }
    onSave({ ...trimmedData, id: Date.now().toString(), isCompleted: false });
  };

  return (
    <div className="modal">
      <div>
        <button className="no-style-button close-modal-btn" onClick={onClose}>
          <img alt="close-modal-img" src={CloseIcon} />
        </button>
        <div className="modal-header">
          {mode === ModalMode.add ? "Create task" : "Edit task"}
        </div>
        <input
          placeholder="Task Name"
          defaultValue={newTask.title}
          onChange={onNameChange}
        />
        <textarea
          placeholder="Type task details here..."
          defaultValue={newTask.description}
          onChange={onDescriptionChange}
        />

        <button
          className="no-style-button save-button"
          onClick={handleSave}
          disabled={!isDataValid}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
