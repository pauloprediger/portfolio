import minhaFoto from '@/assets/images/paulo.jpeg';
import circuloColorido from '@/assets/images/circulo_colorido.png';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu blog! Eu sou Paulo Prediger, estudante de Análise e
          desenvolvimento de Sistemas e estou em busca de um estágio na área de desenvolvimento Web!
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Imagem de um círculo colorido"
          aria-hidden = {true}
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Paulo Prediger" />
      </div>
    </div>
  );
}
