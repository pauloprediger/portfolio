import PostModelo from '@/components/PostModelo';
import React from 'react';
import fotoCapa from '@/assets/images/sobre_mim_capa.png';
import fotoSobreMim from '@/assets/images/paulo.jpeg';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
        Olá eu sou o Paulo Prediger
        <img src={fotoSobreMim} alt="Foto minha" className={styles.fotoSobreMim} />
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio a beatae optio vitae
          et blanditiis iure voluptatum animi, rerum voluptatem deleniti ad, iste fugiat voluptas,
          molestiae possimus quod? Id.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsam delectus nemo,
          quasi quos iure aliquid voluptatum impedit aspernatur molestiae, provident, fugiat maxime
          deserunt repellendus ex! Eius esse molestias maiores!
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis blanditiis enim
          numquam harum porro modi. Architecto maxime maiores incidunt soluta ipsa magnam. In,
          nesciunt a quasi temporibus sint architecto?
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate temporibus dolores
          aliquid incidunt debitis id mollitia optio praesentium tenetur ad sint porro quos,
          placeat, corrupti obcaecati? Nostrum in illo dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam dolor aliquid provident enim. Quaerat eum cum fugiat nemo a
          libero excepturi dignissimos totam, quas sunt officia labore eaque nesciunt aliquam! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Provident repellat quasi mollitia ut
          nesciunt ullam, rerum perferendis tempore quisquam voluptatum! Dolore dignissimos id sit,
          modi rem unde mollitia at reprehenderit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Velit sint vero ratione excepturi ducimus, quidem reiciendis corrupti
          accusamus, vel dolorum ea. Laborum numquam obcaecati totam animi sit eos nulla fugit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque laborum,
          voluptatem, maxime doloribus doloremque aperiam modi velit dignissimos enim aliquid quo?
          Sed, soluta. Reiciendis id incidunt culpa reprehenderit doloribus.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa praesentium dolor aut, sed
          doloribus cumque optio. Corporis, eligendi rerum quasi possimus recusandae libero fugiat
          quod earum itaque fugit atque alias.
        </p>
      </h3>
    </PostModelo>
  );
}
