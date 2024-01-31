import Pages from "../../constants/Pages";
import Controls from "./Controls";
import "./Body.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import Cards from "./Cards";
import Task from "../../constants/Task";
import { DumbData_active, DumbData_history } from "./mockData";
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
      [Pages.tasks]: DumbData_active,
      [Pages.history]: DumbData_history,
    });
  }, []);

  const handlePageChange = (page: Pages) => {
    setCurrentPage(page);
  };

  const handleAddTaskRequest = () =>
    setModalData({ isOpen: true, mode: ModalMode.add });

  const handleEditRequest = (task: Task) =>
    setModalData({ isOpen: true, mode: ModalMode.edit, task });
  const handleModalClose = () => setModalData({ isOpen: false });

  const handleTaskSave = (task: Task) => {
    if (modalData.mode === ModalMode.add) {
      console.log("this task should be added ", task);
      return;
    }
    if (modalData.mode === ModalMode.edit) {
      console.log("this task should be edited ", task);
      return;
    }
    console.log("unhandled taskSave");
  };

  return (
    <div className="body">
      {modalData.isOpen && (
        <Modal
          mode={modalData.mode!}
          onSave={handleTaskSave}
          task={modalData.task}
          onClose={handleModalClose}
        />
      )}
      <Search />
      <Controls currentPage={currentPage} onPageChange={handlePageChange} />
      <AddTask onAddTaskRequest={handleAddTaskRequest} />
      <Cards data={todoData[currentPage]} onEdit={handleEditRequest} />
    </div>
  );
};

export default Body;
