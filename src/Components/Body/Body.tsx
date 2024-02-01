import Pages from "../../constants/Pages";
import Controls from "./Controls";
import "./Body.css";
import { useEffect, useState } from "react";
import * as API from "../../API/localStorage";

import Search from "./Search";
import Cards from "./Cards";
import Task from "../../constants/Task";
import AddTask from "./AddTask";
import ModalMode from "../../constants/ModalMode";
import Modal from "../Modal";

interface TodoData {
  [Pages.tasks]: Task[];
  [Pages.history]: Task[];
}
interface Modaldata {
  isOpen: boolean;
  mode?: ModalMode;
  task?: Task;
}
const Body = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.tasks);
  const [modalData, setModalData] = useState<Modaldata>({ isOpen: false });
  const [todoData, setTodoData] = useState<TodoData>({
    [Pages.tasks]: [],
    [Pages.history]: [],
  });

  useEffect(() => {
    setTodoData({
      [Pages.tasks]: API.getActiveTasks(),
      [Pages.history]: API.getTaskHistory(),
    });
  }, []);

  const handlePageChange = (page: Pages) => {
    setCurrentPage(page);
  };

  const handleAddTaskRequest = () =>
    setModalData({ isOpen: true, mode: ModalMode.add });

  const handleEditRequest = (task: Task) =>
    setModalData({ isOpen: true, mode: ModalMode.edit, task });

  const closeModal = () => setModalData({ isOpen: false });

  const handleTaskSave = (task: Task) => {
    if (modalData.mode === ModalMode.add) {
      API.addTask(task);

      const updatedTodoData = {
        ...todoData,
        [Pages.tasks]: [...todoData[Pages.tasks], task],
      };

      setTodoData(updatedTodoData);

      closeModal();
      return;
    }
    if (modalData.mode === ModalMode.edit) {
      API.editTask(task);

      const updatedTodoData = {
        ...todoData,
        [Pages.tasks]: todoData[Pages.tasks].map((data) =>
          data.id === task.id ? task : data
        ),
      };

      setTodoData(updatedTodoData);

      closeModal();
      return;
    }
    console.warn("unhandled taskSave");
    closeModal();
  };

  const handleTaskDelete = (taskId: string) => {
    API.deleteTask(taskId);
    const updatedTodoData = {
      [Pages.tasks]: todoData[Pages.tasks].filter((data) => data.id !== taskId),
      [Pages.history]: todoData[Pages.history].filter(
        (data) => data.id !== taskId
      ),
    };
    setTodoData(updatedTodoData);

    closeModal();
  };

  const handleTaskComplete = (task: Task) => {
    const updatedTask = { ...task, isCompleted: true };
    API.editTask(updatedTask);

    const updatedTodoData = {
      [Pages.tasks]: todoData[Pages.tasks].filter(
        (data) => data.id !== task.id
      ),
      [Pages.history]: [...todoData[Pages.history], updatedTask],
    };
    setTodoData(updatedTodoData);

    closeModal();
  };

  const handleClearData = () => {
    if (currentPage === Pages.tasks) {
      API.clearActiveTasks();
      setTodoData({ ...todoData, [Pages.tasks]: [] });
      return;
    }
    API.clearTasksHistory();
    setTodoData({ ...todoData, [Pages.history]: [] });
  };

  return (
    <div className="body">
      {modalData.isOpen && (
        <Modal
          mode={modalData.mode!}
          onSave={handleTaskSave}
          task={modalData.task}
          onClose={closeModal}
        />
      )}
      <Search />
      <Controls
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onClear={handleClearData}
      />
      <AddTask onAddTaskRequest={handleAddTaskRequest} />
      <Cards
        data={todoData[currentPage]}
        onEdit={handleEditRequest}
        onDelete={handleTaskDelete}
        onComplete={handleTaskComplete}
      />
    </div>
  );
};

export default Body;
