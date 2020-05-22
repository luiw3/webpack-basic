import React from 'react';

import classes from './PizzaImage.module.css';
import PizzaImage from '../../assets/original.jpg';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}> 
    <img src={PizzaImage} className={classes.Pizza}/>
    </div>
)


export default pizzaImage