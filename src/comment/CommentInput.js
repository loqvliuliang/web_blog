
import React,{ Component } from 'react';

class CommentInput extends Component{

    constructor(){
        super()
        this.state = {
            username:'',
            comment:''
        }
    }

    onchangeUserName(e){
        this.setState({
          username:e.target.value
        })
    }

    onchangeComment(e){
        this.setState({
            comment:e.target.value
        })
    }

    onSubmitInput(){
        if(this.props.onSubmit){
            const {username,comment} = this.state;
            this.props.onSubmit({
                username,
                comment,
                createdTime: +new Date()
            })
        }

        this.setState({ content: '' })
    }

    componentDidMount () {
        this.textarea.focus()
    }

    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }

    _saveUsername (username) {
        localStorage.setItem('username', username)
    }

    componentWillMount () {
        this._loadUsername()
    }

    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    render(){
        return(
           <div className={'comment-input'}>

               <div className={'comment-field'}>
                   <span className={'comment-field-name'}>用户名：</span>
                   <div className={'comment-field-input'}>
                       <input
                           onBlur={this.handleUsernameBlur.bind(this)}
                           value={this.state.username}
                           onChange={this.onchangeUserName.bind(this)}/>
                   </div>
               </div>

               <div className='comment-field'>
                   <span className='comment-field-name'>评论内容：</span>
                   <div className='comment-field-input'>
                       <textarea
                           ref = {(textarea) => this.textarea = textarea }
                           value={this.state.comment}
                           onChange={this.onchangeComment.bind(this)}
                       />
                   </div>
               </div>

               <div className='comment-field-button'>
                   <button onClick={this.onSubmitInput.bind(this)}>
                       发布
                   </button>
               </div>

           </div>
        )
    }
}

export default CommentInput;
