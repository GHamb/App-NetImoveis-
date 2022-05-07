import styles from './LandHeader.module.css'
import Logo from '../assets/logo.png'

const LandHeader = () => {
  return (
    <div className={styles.app_header}>
        <div className={styles.logo_image}>
            <img src={Logo} alt="" className={styles.image_header} />
        </div>
        <div className={styles.content}>
            <a className={styles.space} href='#'><h3>Home</h3></a>
            <a className={styles.space} href='#sobre'><h3>Sobre</h3></a>
            <a className={styles.space} href='#servicos'><h3>Serviços</h3></a>
            <a className={styles.space} href='#contato'><h3>Contato</h3></a>
        </div>
    </div>
  )
}

export default LandHeader