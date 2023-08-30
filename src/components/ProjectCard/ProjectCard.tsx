import React from 'react';
import projets from '../../datas/projets.json';
import styles from './ProjetCard.module.css';

function ProjectCard() {
  return (
    <section className={styles.projetCard}>
    {projets.map((projet, index) => (
      <div className={`${styles[`card${index}`]} ${styles.card}`} key={`${projet.id}-${index}`}>
        <div className="card__header">
          <img src={projet.imgUrl} alt={projet.name}  width="100"/>
        </div>
        <div className="card__body">
          <h2>{projet.name}</h2>
          <p>{projet.description}</p>
          <a href={projet.mainUrl} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      </div>
    ))}
    </section>
  )
}

export default ProjectCard;