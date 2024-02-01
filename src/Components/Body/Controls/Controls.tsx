import historyIcon from "../../../assets/icons/white_history.svg";
import calendarIcon from "../../../assets/icons/white_calendar.svg";
import Pages from "../../../constants/Pages";

const renderPages = [Pages.tasks, Pages.history];
const pagesData = {
  [Pages.tasks]: { icon: calendarIcon, clearText: "Clear all Tasks" },
  [Pages.history]: { icon: historyIcon, clearText: "Clear history" },
};

type PageControlsProps = {
  currentPage: Pages;
  onPageChange: (page: Pages) => void;
  onClear: () => void;
};

const Controls = ({
  currentPage,
  onPageChange,
  onClear,
}: PageControlsProps) => {
  return (
    <div className="controls">
      <div>
        {renderPages.map((page) => (
          <button
            key={`control-btn-${page}`}
            className={`no-style-button page-btn ${
              currentPage === page && "active-page-btn"
            }`}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
            <img alt="active-tasks-icon" src={pagesData[page].icon} />
          </button>
        ))}
      </div>
      <button className="secondary-button" onClick={onClear}>
        {pagesData[currentPage].clearText}
      </button>
    </div>
  );
};

export default Controls;
