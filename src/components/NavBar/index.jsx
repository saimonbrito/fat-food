import React from 'react';
import styles from '../NavBar/styles.module.css';

import {Card} from './Card/index'


export default function NavBar() {

  
  return (
    <div className={styles.container}>
      <div className={styles.text}>
       <h2>Nosso Cardapio</h2>
       <p className={styles.p}>
        clique em adicionar para colocar os produtos na sacola de compras. se preferir você pode pedir pelo WhatsApp
        </p>

      </div>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
      </div>
    
    </div>
    );
}