import sun from '../../images/icon-sun.svg'
import moon from '../../images/icon-moon.svg'

// redux imports
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../features/todo/todoSlice'

const Header = () => {
    const isDarkMode = useSelector((state) => state.todos.isDarkMode)
    const dispatch = useDispatch()

    const toggleDarkMode = () => {
        dispatch(toggleTheme())
    }

    return (
        <div className='flex justify-between font-josefinSans '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-widest'>TODO</h1>
            <img onClick={toggleDarkMode} src={sun} alt='sun' className={`${isDarkMode ? 'hidden' : 'block'} w-6 h-6 cursor-pointer `} />
            <img onClick={toggleDarkMode} src={moon} alt='sun' className={`cursor-pointer ${isDarkMode ? 'block' : 'hidden'} w-6 h-6`} />
        </div>
    )
}

export default Header
