import React from 'react';
import HeaderImage from '../../images/HeaderImage2.png'

export default  ({name}) => {
	return (
		<div>
		<div className="uk-background-fixed uk-background-center-center uk-height-medium uk-background-blend-overlay uk-flex uk-flex-center uk-flex-middle uk-background-secondary
	 uk-light" style={{backgroundImage: `url(${HeaderImage})`}}>
		<h1 class="uk-heading-primary">{name}</h1>
		</div>
		<div className="uk-text-center uk-width-1-2@m">
		<div className='uk-flex-center uk-overlay'>
                
            </div>
            </div>
		</div>
	)
}