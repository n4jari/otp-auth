import styles from './App.module.css'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import img from './assets/imgs/bg-btn.png'
import Shapes from './components/customs/shapes/Shapes';

const App = () => {
  return (
    <div className={styles.container}>
      {/* CUSTOM SHAPES  */}
      <Shapes />
      
      <div className={styles.content}>
        <Link to="signin" className={styles.signin}>
          <img src={img} alt='bg-img' className={styles.img} />
          <span>Sign in</span>
          <span><BsArrowRight /></span>
        </Link>

        <Link to="signup" className={styles.signup}>
          <span>Sign up</span>
          <span><BsArrowRight /></span>
        </Link>
      </div>
    </div>
  )
}

export default App