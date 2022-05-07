import styles from './LandHeader.module.css'
import Logo from '../assets/logo.png'

const LandHeader = () => {
  return (
    <div className={styles.app_header}>
        <div className={styles.logo_image}>
            <img src={Logo} alt="" className={styles.image_header} />
        </div>
        <div className={styles.content}>
            <h3 className ={styles.space}>Home</h3>
            <h3 className ={styles.space}>Sobre</h3>
            <h3 className ={styles.space}>Serviços</h3>
            <h3 className ={styles.space}>Contato</h3>
        </div>
    </div>
  )
}

export default LandHeader