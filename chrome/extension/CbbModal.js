import React, { PropTypes, Component } from 'react';
//import style from '../assets/bccModalx.css';

export default class CbbModal extends Component { 

	constructor(props) {
		super(props);
		//this.state = {activeButton: "menuAffirm"};
		//this.state = this.menuSelect.bind(this);
	}

	/*function menuSelect(menuButton) {
		this.setState({activeButton: menuButton});
	}*/

	render() {

		return (
		 	<div id="cbModal">
				<div id="menu">
					<div className="menuTab" /*onClick={menuSelect("menuAffirm")}*/>
						Affirm
					</div>
					<div className="menuTab" /*onClick={menuSelect("menuClarify")}*/>
						Clarify
					</div>
					<div className="menuTab" /*onClick={menuSelect("menuRequest")}*/>
						Request
					</div>
					<div id="menuClear"></div>
				</div>
				<div id="suggestionBox">
					<div className="suggestion1">suggestion1</div>
					<div className="suggestion2">suggestion2</div>
					<div className="suggestion3">suggestion3</div>
					<div className="suggestion4">suggestion4</div>
					<div className="suggestion5">suggestion5</div>
					<div className="suggestion6">suggestion6</div>
				</div>
			</div>
		);
	}
}

	/*var affirm1 = 'That\'s a good point.',
	affirm2 = 'Yes, and...',
	affirm3 = 'You\'re right.',
	affirm4 = 'I agree with you that...',
	clarify1 = 'How would you define... ?',
	clarify2 = 'What made you aware of this problem?',
	clarify3 = '',
	clarify4 = '',
	request1 = 'What are your thoughts on this article?',
	request2 = 'Want to talk about this in offline?',
	request3 = '',
	request4 = '',
	suggestion1 = affirm1,
	suggestion2 = affirm2,
	suggestion3 = affirm3,
	suggestion4 = affirm4;

	menuAffirm.onclick = function() {
	menuAffirm.style.backgroundColor = menuSelect
	menuClarify.style.backgroundColor = menuDeselect
	menuRequest.style.backgroundColor = menuDeselect},
	menuClarify.onclick = function() {
	menuAffirm.style.backgroundColor = menuDeselect
	menuClarify.style.backgroundColor = menuSelect
	menuRequest.style.backgroundColor = menuDeselect},
	menuRequest.onclick = function() {
	menuAffirm.style.backgroundColor = menuDeselect
	menuClarify.style.backgroundColor = menuDeselect
	menuRequest.style.backgroundColor = menuSelect},
			suggestion1.onclick = function() {

		document.execCommand('copy');
	}*/
