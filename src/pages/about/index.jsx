import React, { useEffect } from 'react';
import { useStyles } from './about.style';



const About = () => {
    const classes = useStyles();

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            scroll: "smooth",
          });
        };
    
        scrollToTop();
        return () => {};
      }, []);

    return (
        <>
           About Page

           

        </>
    )
}

export default About
