import styles from './Shapes.module.css'
import img from '../../../assets/imgs/balls.png'

const Shapes = () => {
    return (
        <div className={styles.container}>
            <img src={img} alt='background shapes' />
            <h2>
                Welcome
                Back
            </h2>
        </div>
    )
}

export default Shapes