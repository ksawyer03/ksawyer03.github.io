import React, { Component } from 'react';
const Survey = ({updatePage}) => {
	return (
		<div className='uk-padding'>
<form onSubmit={updatePage}>
    <fieldset class="uk-fieldset">

    			<h1>Our Chocolatiers Customize Your Gifts for Perfection!</h1>

		<h3>Let's start with a few quick questions to get you a world class Gifts</h3>

			<div class="uk-margin">
        <div class="uk-form-label">What kind of chocolate do you want?</div>
        <div class="uk-form-controls uk-form-controls-text">
            <label><input class="uk-radio" type="radio" name="radio1"/> Milk Chocolate </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> Dark Chocolate </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> More </label>
        </div>
    </div>

			
			<div class="uk-margin">
        <div class="uk-form-label">Fillings?</div>
        <div class="uk-form-controls uk-form-controls-text">
            <label><input class="uk-radio" type="radio" name="radio1"/> Caramel </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> Hazelnut </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> More </label>

        </div>
    </div>

			<div class="uk-margin">
        <div class="uk-form-label">Nuts?</div>
        <div class="uk-form-controls uk-form-controls-text">
            <label><input class="uk-radio" type="radio" name="radio1"/> Pecans </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> Almonds </label><br/>
            <label><input class="uk-radio" type="radio" name="radio1"/> More </label>
        </div>
    </div>
    <button onClick={updatePage} className='uk-button uk-button-primary'>See Recommendations</button>
    </fieldset>
    </form>

		</div>
		)
}

export default Survey;