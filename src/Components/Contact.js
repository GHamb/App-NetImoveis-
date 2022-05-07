import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <form action="">
      <div className={styles.container_contact}>
        <div className={styles.contact_info}>
          <h1>Entre em contato</h1>
          <div className={styles.contact_inputs}>
            <div>
              <input type="text" placeholder="Nome"/>
            </div>
            <div>
              <input type="email" placeholder="Email"/>
            </div>
            <div>
              <input type="tel" placeholder="Telefone"/>
            </div>
          </div>
          <br/>
          <div className={styles.contact_txtarea}>
            <textarea name="" id="" cols="45" rows="10" placeholder="Motivo de contato"></textarea>
            <button >Enviar</button>
          </div>
        </div>

        <div className={styles.local}>
          <h3>Localização</h3>
          <iframe
            width="250"
            height="250"
            src="https://maps.google.com/maps?q=Av.%20Paulista,%201578%20-%20Bela%20Vista,%20S%C3%A3o%20Paulo%20-%20SP,%2001310-200&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="5"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </form>
  );
};

export default Contact;
