import styles from './Services.module.css'
import { useState } from 'react'


import icon_custom from "../assets/customize.png"
import icon_predio from "../assets/predio.png"


const Services = () => {

  const [isOpen, setOpen] = useState(false)

  return (

    <div className={styles.container_services}>
      <button onClick={() => {
        setOpen(!isOpen)
      }} className={styles.services_button}> Serviços ⬇</button>
      {
        isOpen ?
          <div className={styles.services_description} >
            <div className={styles.content_description}>
              <img src={icon_custom} alt="" width="50px" />
              <p> Disponibilização de serviços de corretagem de imoveis, compra venda ou aluguel </p>
             
            </div>
            <div className={styles.content_description}>
               <img src={icon_predio} width="50px" alt="" />
               <p>Consultoria personalizada para clientes que desejam prédios ou ambientes corporativos </p>
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}



export default Services