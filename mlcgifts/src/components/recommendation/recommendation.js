import React from 'react';
import Reviews from '../reviews/reviews.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({products}) => {
	let avgRating = 0;
	products[1].reviews.forEach((review) => avgRating += review.rating)
	avgRating /= products[1].reviews.length;
	let negRating = 5 - avgRating
	let starHTML = ''
	for(let i = 1; i <= avgRating; i++) starHTML += '<i class="fas fa-star"></i>'
	for(let j = 0; j < negRating; j++) starHTML += '<i class="far fa-star"></i>'

	return (
		<div>
		<h1>Based on your preferences, here's what we found</h1>
			<h3>{products[1].title}</h3>
				<div className="uk-inline uk-flex">
				<p dangerouslySetInnerHTML={{__html: starHTML}}></p>
				<p className="uk-text-top"><Reviews reviews={products[1].reviews}/></p>
				</div>
			<img src={products[1].image}/>
			<p>{products[1].summary}</p>
			<button className="uk-button uk-button-default">Buy Now</button>
		</div>
		)
}