import React from "react";
import styles from "./Movies.module.css";
import Moviea from "../Movie/Movie"

const Movies = (props) => {

    const { item } = props

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>latest movies</h2>
                <div className={styles.movie__container}>
               {
                  item.map(function(data){
                     return (                    
                           <Moviea key={data.id} title={data.title} date={data.date}  image={data.image} link={data.link} genre={data.genre}/>
                       
                     )
                  })
               }
               </div>
           </section>
         </div>
    );
}

export default Movies;