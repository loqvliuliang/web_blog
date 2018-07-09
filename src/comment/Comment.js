import React, { Component } from 'react'

class Comment extends Component {

    constructor(){
        super()
        this.state = {
            timeString : ''
        }
    }


    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            30000
        )
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000;
        let timeInfo = '';
        if(duration < 60){
            timeInfo = `${Math.round(Math.max(duration, 1))} 秒前`;
        }else if(duration<3600){
            timeInfo =`${Math.round(duration / 60)} 分钟前`
        }else if(duration<3600*60){
            timeInfo =`${Math.round(duration / 3600)} 小时前`
        }else {
            timeInfo = `${Math.round(duration / (3600*60))} 天前`
        }
        // console.log(timeInfo);
        this.setState({
            timeString: timeInfo
        })
    }

    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.comment}</p>
                <span className='comment-createdtime'>
                  {this.state.timeString}
                </span>
            </div>
        )
    }
}

export default Comment