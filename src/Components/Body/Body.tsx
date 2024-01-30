import Pages from "../../constants/Pages";
import Controls from "./Controls";
import "./Body.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import Cards from "./Cards";
import Task from "../../constants/Task";
import { DumbData_active, DumbData_history } from "./mockData";
import AddTask from "./AddTask";

interface TodoData {
  [Pages.tasks]: Task[];
  [Pages.history]: Task[];
}
const Body = () => {
  const [currentPage, setCurrentPage] = useState(Pages.tasks);
  const [todoData, setTodoData] = useState<TodoData>({
    [Pages.tasks]: [],
    [Pages.history]: [],
  });

  const handlePageChange = (page: Pages) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setTodoData({
      [Pages.tasks]: DumbData_active,
      [Pages.history]: DumbData_history,
    });
  }, []);

  return (
    <div className="body">
      <Search />
      <Controls currentPage={currentPage} onPageChange={handlePageChange} />
      <AddTask />
      <Cards data={todoData[currentPage]} />
    </div>
  );
};

export default Body;
