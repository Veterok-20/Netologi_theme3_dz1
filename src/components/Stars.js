import React from "react";
import PropTypes from 'prop-types';
import Star from "./Star";

export default function Stars(props) {
    const { count } = props;    
    if (count < 1 || count > 5) return;
    const countStars = [...Array(count).keys()];
   
    return (
        <ul className="card-body-stars u-clearfix">
            {countStars.map((item) => {
                return (
                <li key={item}>
                    <Star />
                </li>
                )
            })}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}