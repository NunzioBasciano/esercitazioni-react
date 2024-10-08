import React from 'react';
import styles from './card.module.css';


function truncateText(text, limit = 200) {
    if (text.length > limit) {
        return text.slice(0, limit) + '...';
    }
    return text;
}

function Card(props) {

    const formattedDescription = truncateText(props.description);
    const formattedPrice = props.price.toFixed(2);

    return (
        <div className={styles.card} key={props.id}>
            <h3 className={styles.card_title}>{props.title}</h3>
            <img className={styles.card_image} src={props.image} alt="" />
            <p>{formattedDescription}</p>
            <p className={styles.card_price}>€ {formattedPrice}</p>

            {props.children && (
                <div >
                    {props.children}
                </div>
            )}
        </div>
    );
}

export default Card;