import React from 'react'
import styles from './About.module.css'

import icon_casa from "../assets/casa.png"
import icon_suporte from "../assets/suporte.png"
import icon_site from "../assets/site.png"

const About = () => {
  return (
    <div className={styles.container_about}>
        <div className={styles.cards}>
            <h1>Necessidade</h1>
            <img src={icon_casa} alt="" className={styles.icons}/>
            <p className={styles.paragraf}>Criada a partir da necessidade de aproximar clientes da sua tão sonhada casa nova  </p>
        </div>
        <div className={styles.cards}>
        <h1>Comprometimento</h1>
            <img src={icon_suporte} alt="" className={styles.icons} />
            <p className={styles.paragraf}>Com pessoas treinadas para o pós vendas para assegurar sua satisfação com o imóvel desejado  </p>
        </div>
        <div className={styles.cards}>
        <h1>Negociações online</h1>
            <img src={icon_site} alt=""  className={styles.icons}/>
            <p className={styles.paragraf}>Possibilidade de necociações a um clique de distancia </p>
        </div>
    </div>
  )
}

export default About