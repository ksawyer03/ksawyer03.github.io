import React from 'react';
import Header from '../../components/header/header'
import Survey from '../../components/survey/survey'

export default ({updatePage}) => {
	return (
		<div>
			<Header name="Welcome"/>
        	<Survey updatePage={updatePage} />
		</div>
		)
}