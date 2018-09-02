import React from 'react';
import products from '../../list/products'
import Header from '../../components/header/header'
import Recommendation from '../../components/recommendation/recommendation'

export default () => (
<div>
	<Header name="Recommendation"/>
    <Recommendation products={products}/>
</div>
)