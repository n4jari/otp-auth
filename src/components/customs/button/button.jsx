import styles from './button.module.css'
import img from '../../../assets/imgs/bg-btn.png'
import { BsArrowRight } from 'react-icons/bs'

const Button = ({ text, onChange }) => {
  return (

    <button onChange={onChange} className={styles.btn}>
      <img src={img} alt='bg-img' className={styles.img} />
      <span>{text}</span>
      <span><BsArrowRight /></span>
    </button>

  )
}

export default Button