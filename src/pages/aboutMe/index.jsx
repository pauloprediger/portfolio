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
          Brasileiro nascido em 1999 no município de Quinze de Novembro, cidade interiorana do
          centro norte do Estado do Rio Grande do Sul. Descendente de alemães, portugueses e
          indígenas desde jovem tive contato com a terra, cresci em uma região agrícola e pacata,
          muito próxima à natureza. Filho de cozinheira e comerciante, sempre estive envolvido com
          processos relacionados à alimentação, desde o plantio até a etapa final de entrega e
          experiência do consumidor. Quando jovem, por diversas vezes auxilieino plantio, cuidado e
          coleta de alimentos cultivados pela família. Também em sua juventude contribui para com o
          ramo alimentício familiar, onde cumpria diversas pequenas funções essenciais ao
          funcionamento e manutenção do estabelecimento. Foi assim, trabalhando com a comida desde
          cedo, que Paulo despertou interesse pela gastronomia, uma de suas grandes paixões.
        </p>
        <p className={styles.paragrafo}>
          No período transitório da infância para adolescência surgiram novos interesses que viriam
          a se tornar minha segunda paixão, a área da tecnologia. Foi mexendo em computadores e com
          jogos eletrônicos que viria a ficar aficionado por informática e tecnologia, a ponto de
          desejar construir uma carreira na área de desenvolvimento.
        </p>
        <p className={styles.paragrafo}>
          Estudei em escola pública durante toda a infância. Na adolescência, prestei processo
          seletivo, no qual viria a ser aprovado, para me profissionalizar com um ensino médio
          técnico. Foi então que, no ano de 2013, ingressei no Instituto Federal campus Ibirubá.
          Durante esse período, estudei muitas das competências e habilidades essenciais para um
          profissional de TI. Tais como: Algoritmos, lógica computacional, banco de dados,
          programação, hardware, sistemas operacionais e redes de computadores. Vale citar que,
          durante esse período, o fui selecionado como bolsista CNPq para desenvolvimento de um
          aplicativo mobile para dispositivos Android. E como atividade extracurricular, no ano de
          2015, participei do campeonato de programação que acontece anualmente na Faculdade Antonio
          Meneghetti, o Code Race. No decorrer do terceiro ano de estudos, realizei estágio na área
          de manutenção de redes de computadores e hardware. Conclui meus estudos no ano de 2016,
          recebendo o título de Técnico em Informática.
        </p>
        <p className={styles.paragrafo}>
          Em 2016, passei no processo seletivo na UFSM e, durante 2 anos, cursei Ciência da
          Computação. Após esse período, conclui que ainda não estava preparado e optei por me
          dedicar à gastronomia. Em 2018, fui aprovado como bolsista ProUni para estudar gastronomia
          na Unisinos Porto Alegre. Durante o período de 3 anos, através de muito estudo e prática,
          aprimorei minhas técnicas culinárias. Participei de cursos e eventos gastronômicos.
          Realizei estágio e trabalhei como cozinheiro freelancer. Ao fim do curso, demonstrei
          competência nas habilidades necessárias a um profissional da área da alimentação. Foi
          assim que, em 2021, formei-me técnico em gastronomia e retornei para minha cidade natal
          para aplicar o conhecimento adquirido no ramo familiar.
        </p>
        <p className={styles.paragrafo}>
          No ano de 2023, iniciei minha segunda graduação na Estácio, na área de TI, no curso de
          Análise e Desenvolvimento de Sistemas, com o objetivo de, futuramente, me tornar um
          desenvolvedor fullstack. Para alcançar esse objetivo, divido minha rotina entre estudos e
          trabalho, buscando aperfeiçoar minhas habilidades
        </p>
      </h3>
    </PostModelo>
  );
}
