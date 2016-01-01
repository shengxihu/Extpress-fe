/**
 * comment_box.js 
 *
 * comment box compoent in course view
 * by zindex
 */
import React from "react";

class HotTag extends React.Component{
	constructor(){
		super();
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	_onClickHandler(){
		this.props._onClickedHandler(this.props.data,this.props.id||null);
	}
	render(){
		return <div className="h_tag" onClick={this._onClickHandler} >{ this.props.data.title }</div>
	}
}

class CurrentTag extends React.Component{
	constructor(){
		super();
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	_onClickHandler(){
		this.props._onClickedHandler(this.props.data,this.props.id||null);
	}
	render(){
		return <div className="c_tag" onClick={this._onClickHandler} >{ "#" + this.props.data.title }</div>
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
		this.state = {tags:[],hot_tags:[]};
		this._onAddDataHandler = this._onAddDataHandler.bind(this);
		$.get("http://xueer.ccnuer.cn/api/v1.0/tags/").done(data =>{
				var hot_tags = JSON.parse(data);
				this.setState({hot_tags:hot_tags})
			})
	}
	_onAddDataHandler(val){
		var arr = this.state.tags
		for(var i=0;i<arr.length;i++){
			if(arr[i] === val){
				alert("重复了！！")
				return;
			}
		}
		this.setState({tags: this.state.tags.concat(val)})
	}
	render(){  
		var hot_tags = [],current_tags = [];
		this.state.tags.map((x,i) => current_tags.push(<CurrentTag key={i} data={x} id={i} />));
  	 	this.state.hot_tags.map((x,i) => hot_tags.push(<HotTag key={i} data={x} id={i} _onClickedHandler={this._onAddDataHandler}/>));
		return <div className="container">
					<form action="" id="comment_form" className="comment_form">
						<div className="main">
							<textarea name="textarea" id="textarea" className="textarea"></textarea>
							<div className="current_tag space">
								<svg viewBox="0 0 14 14" className="tag_icon">
                        			<use xlinkHref="#tag_icon"></use>
                    			</svg>
								{current_tags}
								<input className="tag_input" type="text"/>
							</div>
							<div className="hot_title">热门标签</div>
							<HotTags>{hot_tags}</HotTags>
						</div>
						<div className="btns space">
							<div className="btn comment_close">返回</div>
							<button type="submit" className="btn comment_submit">发布评论</button>
						</div>
					</form>
			   </div>
	}
}


module.exports = CommentBox;