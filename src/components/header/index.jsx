import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image'

export default function header() {
  return (
   <div className={styles.container}>
        <div>
          <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        </div>    
     
        <div className={styles.containerLinks}>
          <div>
            <a className={styles.historico} href="*">Historico</a>
          </div>
          
          <button className='btnSacola'>
          <Image
          src="/bag.png"
          width={15}
          height={15}
          alt="Picture of the author"
        />
            Sacola</button>
        </div>
   </div>
  );
}