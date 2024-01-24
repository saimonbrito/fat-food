import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export function Card() {
  return (
   <div className={styles.container}>
      <div>
      <Image
            src="/hamburguer.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <h2 className={styles.h2} >Splic Burguer</h2>
          <p className={styles.p}>
            hamburguer de 250g queijo tomate alface e cebola
          </p>
          <p className={styles.valor}>R$ 18.90</p>

          <button className={styles.btnAdicionar}>
          <Image
          
          src="/bag-black.png"
          width={15}
          height={15}
          alt="Picture of the author"
        />
            <span className={styles.span}>Adicionar</span></button>
      </div>
   </div>
  );
}