import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Home.module.css'
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"


const Home = () => {
  return (
    <div className={styles.carousel} id="#">
        <div class="carousel-wrapper">
            
            <Carousel infiniteLoop width="500px" autoPlay>
                <div>
                    <img src={foto1}   />
                    <p className="legend">Casa Alto Padrão - São Carlos</p>
                </div>
                <div>
                    <img src={foto2}/>
                    <p className="legend">Casa Condominio Hollywood </p>
                </div>
                <div>
                    <img src={foto3}/>
                    <p className="legend">Casa Condominio Serra Praiana </p>
                </div>
                <div>
                    <img src={foto4}/>
                    <p className="legend">Casa Ilha Catarinense </p>
                </div>
                
            </Carousel>

        </div>
    </div>
        
    
    
  )
}

export default Home