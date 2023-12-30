//  image imports
import bgMobileDark from './images/bg-mobile-dark.jpg'
import bgDesktopDark from './images/bg-desktop-dark.jpg'
import bgMobileLight from './images/bg-mobile-light.jpg'
import bgDesktopLight from './images/bg-desktop-light.jpg'

// components imports
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import TodoList from './components/Todo/TodoList/TodoList'

// redux imports
import { useSelector } from 'react-redux'

export default function App() {
  const isDarkMode = useSelector((state) => state.todos.isDarkMode)

  return (
    <main className={`min-h-screen  w-full ${isDarkMode ? 'bg-dark-veryDarkBlue' : "bg-light-veryLightGray"}`}>
      {isDarkMode ?
        <>
          <img src={bgMobileDark} alt='background' className={`md:hidden w-full`} />
          <img src={bgDesktopDark} alt='background' className='hidden md:block w-full' />
        </>
        :
        <>
          <img src={bgMobileLight} alt='background' className={`md:hidden w-full`} />
          <img src={bgDesktopLight} alt='background' className='hidden md:block w-full' />
        </>
      }

      <div className='w-[90%] py-5  md:w-[40%] max-w-full -mt-40 mx-auto '>
        <Header />
        <Input />
        <TodoList />
      </div>
    </main>
  )
}