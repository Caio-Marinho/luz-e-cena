import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src='./Logo e Favicon/Logo.png' />
      <p>Onde a realidade encontra a fantasia</p>
    </div>
  )
}

export default FooterLogo
