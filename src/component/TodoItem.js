const TodoItem = ({ task }) => {
  return (
    <label>
      <input type="checkbox" />
      <div className="icon-container">
        <svg
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10.3333V12.3333M19 12.3333V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V12.3333Z"
            strokeLinecap="round"
            className="todo-box-icon"
          />
        </svg>
        <svg
          width="16"
          height="12"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.36364L4.29446 8.3586C4.68943 8.71766 5.29679 8.70321 5.67424 8.32576L13 1"
            className="todo-check-icon"
          />
        </svg>
      </div>
      <div className="line" />
      <span>{task}</span>
    </label>
  );
};
export default TodoItem;
