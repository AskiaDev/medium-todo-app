import { useSelector } from "react-redux";

const FilterBy = ({ setFilter }) => {
    const isDarkMode = useSelector((state) => state.todos.isDarkMode)
    return (
        <div className={`flex shadow-lg justify-center rounded py-2 ${isDarkMode ? "  bg-dark-veryDarkDesaturatedBlue " : " bg-light-veryLightGray"} mt-4`}>
            <div className="p-2 flex gap-4">
                <button onClick={() => setFilter("all")} name="All" className={`font-josefinSans ${isDarkMode ? "   text-light-veryLightGray " : "text-dark-veryDarkDesaturatedBlue "} hover:text-primary-brightBlue`}>All</button>
                <button onClick={() => setFilter("active")} className={`font-josefinSans ${isDarkMode ? "   text-light-veryLightGray " : " text-dark-veryDarkDesaturatedBlue"} hover:text-primary-brightBlue`}>Active</button>
                <button onClick={() => setFilter("completed")} name="Completed" className={`font-josefinSans ${isDarkMode ? "   text-light-veryLightGray " : " text-dark-veryDarkDesaturatedBlue"} hover:text-primary-brightBlue`}>Completed</button>
            </div>

        </div>
    );
};

export default FilterBy;
