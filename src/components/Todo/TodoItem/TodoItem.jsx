import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, deleteTodo } from "../../../features/todo/todoSlice";
import { truncateText } from "../../../services/helper";

const TodoItem = ({ todo, handleSort, draggedItem, draggedOverItem, idx }) => {
    const { description, done, id } = todo;
    const [isChecked, setIsChecked] = useState(done || false);
    const [showIcon, setShowIcon] = useState(false);
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.todos.isDarkMode)

    useEffect(() => {
        setIsChecked(done || false);
    }, [done]);

    function handleOnChange() {
        setIsChecked((prevState) => !prevState);
        dispatch(toggleComplete({ id: id }));
    }

    function handleDeleteTodo() {
        dispatch(deleteTodo({
            id: id
        }))
    }

    return (
        <>
            <li draggable onDragEnd={handleSort} onDragOver={(e) => e.preventDefault()} onDragStart={() => (draggedItem.current = idx)} onDragEnter={() => (draggedOverItem.current = idx)} onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} className="w-full  flex justify-between items-center border-b border-dark-darkGrayishBlue">
                <div className="flex items-center p-4 gap-4">
                    <label className="relative">
                        <input
                            type="checkbox"
                            onChange={handleOnChange}
                            checked={isChecked}
                            className="w-3 h-3 hover:border-blue-500 cursor-pointer appearance-none border border-dark-darkGrayishBlue rounded-full p-2 checked:bg-gradient-to-r checked:from-primary-checkBlue checked:to-primary-checkPurple"
                        />
                        {isChecked && (
                            <span className="absolute top-[5px] left-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                                </svg>
                            </span>
                        )}
                    </label>
                    <p className={`font-josefinSans text-lg ${isChecked ? 'line-through text-dark-darkGrayishBlue' : ''
                        } ${isChecked && isDarkMode ? 'text-dark-darkGrayishBlue' : ''} ${!isChecked && isDarkMode ? 'text-light-veryLightGray' : 'text-dark-darkGrayishBlue'
                        }`}>
                        {truncateText(description, 30)}
                    </p>

                </div>
                {showIcon && <div onClick={handleDeleteTodo} className="px-4 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg></div>}
            </li >
        </>
    );
};

export default TodoItem;
