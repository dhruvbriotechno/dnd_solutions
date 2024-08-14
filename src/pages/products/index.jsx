import React, { useEffect } from 'react';
import { useStyles } from './products.style';



const Products = () => {
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
           Products Page

           

        </>
    )
}

export default Products
