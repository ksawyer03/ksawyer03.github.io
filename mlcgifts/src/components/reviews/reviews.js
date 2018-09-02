import React from 'react';

const Rating = ({name, review, image}) => (
	<article class="uk-comment uk-comment-primary">
    <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid=''>
        <div class="uk-width-auto">
            <img class="uk-comment-avatar" src={image} width="80" height="80" alt=""/>
        </div>
        <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{name}</a></h4>
        </div>
    </header>
    <div class="uk-comment-body">
        <p>L{review}</p>
    </div>
</article>
)

export default ({reviews}) => {
	
	return (
		<div>
		<button class="uk-button uk-button-text" type="button" uk-toggle="target: #modal-close-default">Default</button>
		<div id="modal-close-default" uk-modal="">
    <div className="uk-modal-dialog uk-modal-body">
        <button className="uk-modal-close-default" type="button" uk-close=""></button>
        <h2 className="uk-modal-title">Reviews from Real People</h2>
        {
        	reviews.map((reviewer, i) => <img width="50" height="50" className='uk-border-circle' src={reviews[i].reviewer.image}/>)
        }
        <h2 className="uk-modal-title">Ratings & Reviews</h2>
        {
        	reviews.map((review, i) => <Rating
        		name={reviews[i].reviewer.name}
        		review={reviews[i].review}
        		image={reviews[i].reviewer.image}
        		/>)
        }
    </div>
</div>
		</div>
		)
}