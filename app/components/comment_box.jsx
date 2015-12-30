/**
 * comment_box.js 
 *
 * comment box compoent in course view
 * by zindex
 */
import React from "react";

class CommentBox extends React.Component{
	constructor(){
		super(); 
	} 
	render(){  
		return <div className="container">
					<input type="text"/>
					<div>hahahah</div>
			   </div>
	}
}

module.exports = CommentBox;