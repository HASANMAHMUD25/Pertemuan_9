import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {

    const [movie, setMovie] = useState("")

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"

        const response = await fetch(url)
        const data = await response.json()

        setMovie(data)
    }
        useEffect(
            function(){
                 getDataApi()  
            }, []
        ) 

        console.log(movie)
    
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3> 
                    <p className={styles.hero__description}>
                   Lorem ipsum, or simply lipsum, is standard text placed to demonstrate graphic or visual presentation elements such as fonts, typography and layout. Wikipedia

                    </p>
                    <button className={styles.hero__button}>watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image}
                    src={movie.Poster}
                    alt="placeholder"/>
                </div>
            </section>
        </div>
    )
}

export default Hero;