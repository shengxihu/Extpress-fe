/**
 * comment_box.js 
 *
 * comment box compoent in course view
 * by zindex
 */
import React from "react";

class Tag extends React.Component{
	render(){
		return <div className="tag">{ this.props.data.title }</div>
	}
}

class HotTags extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return <div className="hot_tags margin_auto space">{ this.props.children }</div>
	}
}

class CurrentTags extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return <div className="current_tags">{ this.props.children }</div>
	}
}

class CommentBox extends React.Component{
	constructor(){
		var tha
		super(); 
		this.state = {hot_tags:[]};
		$.get("http://xueer.ccnuer.cn/api/v1.0/tags/").done(data =>{
				var hot_tags = JSON.parse(data);
				this.setState({hot_tags:hot_tags})
			})
	}
	render(){  
		var hot_tags = [];
  	 	this.state.hot_tags.map((x,i) => hot_tags.push(<Tag key={i} data={x} id={i} />));
		return <div className="container">
					<form action="" id="comment_form" className="comment_form">
						<div className="main">
							<textarea name="textarea" id="textarea" className="textarea"></textarea>
							<div className="current_tag space">
								<CurrentTags></CurrentTags>
								<input className="tag_input" type="text"/>
							</div>
							<div className="hot_title">热门标签</div>
							<HotTags>{hot_tags}</HotTags>
						</div>
						<div className="btn close">返回</div>
						<button type="submit" className="btn comment_submit">发布评论</button>
					</form>
			   </div>
	}
}


module.exports = CommentBox;