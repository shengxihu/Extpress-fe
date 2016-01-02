/**
 * comment_box.js 
 *
 * comment box compoent in course view
 * by zindex
 */
var React = require("react");

class HotTag extends React.Component{
	constructor(){
		super();
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	_onClickHandler(e){
		this.props._onClickedHandler(e,this.props.data,this.props.id||null);
	}
	render(){
		return <div className="h_tag" onClick={this._onClickHandler} >{ this.props.data }</div>
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
		return <div className="c_tag" onClick={this._onClickHandler} >{ "#" + this.props.data }</div>
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
		super(); 
		this.state = {val:'',tags:[],hot_tags:[]};
		this._onAddDataHandler = this._onAddDataHandler.bind(this);
		this._onRemoveDataHandler = this._onRemoveDataHandler.bind(this);
		this._onChangeHandler = this._onChangeHandler.bind(this);
		this._onKeyDownHandler = this._onKeyDownHandler.bind(this);
		this._onHotClickedHandler = this._onHotClickedHandler.bind(this);
		$.get("http://xueer.ccnuer.cn/api/v1.0/tags/").done(data =>{
				var hot_tags = JSON.parse(data),arr=[];
				for (var i=0;i<hot_tags.length;i++){
					arr.push(hot_tags[i].title)
				}
				this.setState({hot_tags:arr})
			})
	}
	_onAddDataHandler(val){
		var arr = this.state.tags
		for(var i=0;i<arr.length;i++){
			if(arr[i] === val){
				alert("重复了！")
				return;
			}
		}
		this.setState({tags: this.state.tags.concat(val)});
	}
	_onHotClickedHandler(e,val){
		this._onAddDataHandler(val);
	}
	_onRemoveDataHandler(){
		var arr = this.state.tags;
		arr.splice(arr.length-1, 1);
		this.setState({tags: arr})
	}
	_onChangeHandler(e){
		if(e.target.value !== "" && e.target.value[e.target.value.length-1] == " "){
			this._onAddDataHandler(e.target.value);
			e.target.value = "";
		}
	}
	_onKeyDownHandler(e){
		if (e.key == "Enter"){
			e.preventDefault();
			this._onAddDataHandler(e.target.value);
			e.target.value = null;
			$(e.target).focus();
		}
		if(e.key == "Backspace" && e.target.value == ""){
			this._onRemoveDataHandler();
		}
	}
	render(){  
		var hot_tags = [],current_tags = [];
		this.state.tags.map((x,i) => current_tags.push(<CurrentTag key={i} data={x} id={i} />));
  	 	this.state.hot_tags.map((x,i) => hot_tags.push(<HotTag key={i} data={x} id={i} _onClickedHandler={this._onHotClickedHandler}/>));
		return <div className="container">
					<form action="" id="comment_form" className="comment_form">
						<div className="main">
							<textarea name="body" id="body" className="textarea"></textarea>
							<div className="current_tag space">
								<svg viewBox="0 0 14 14" className="tag_icon">
                        			<use xlinkHref="#tag_icon"></use>
                    			</svg>
								{current_tags}
								<input ref="tag_input" className="tag_input" type="text" placeholder="输入空格确认" onChange={this._onChangeHandler} onKeyDown={this._onKeyDownHandler}/>
							</div>
							<input ref="hidden_input" type="hidden" id="tags" name="tags" className="hidden_input" value={this.state.tags.join(" ")}/>
							<div className="hot_title">热门标签</div>
							<HotTags>{hot_tags}</HotTags>
						</div>
						<div className="btns space">
							<div className="btn comment_close">返回</div>
							<button type="submit" className="btn comment_submit" onClick={this._onSubmitHandler}>发布评论</button>
						</div>
					</form>
			   </div>
	}
}


module.exports = CommentBox;