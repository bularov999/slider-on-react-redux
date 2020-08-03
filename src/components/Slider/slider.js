import React, { Component } from 'react'
import './slider.css'
import {NEXT_SLIDE, PREV_SLIDE} from '../../action-types/action-types'
import srcImg from '../../images-data/img-data.js'
import Slides from '../Slides/slides'
import { connect } from 'react-redux'

class Slider extends Component {
    constructor(props){
        super(props)
        // const {next , prev} = this.props
    }

    render(){
        
     return (
         <div 
         className="block" 
         style={{backgroundImage:'url('+ srcImg[this.props.slideState].src + ')'}}
         >
             <button className="left" onClick={this.props.prev}></button>
             <Slides/>
             <button className="right" onClick={this.props.next}></button>
         </div>
     )
 }
}

const mapStateToProps = (state) => {
    return {
    slideState : state.slideReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        next: () => dispatch({type: NEXT_SLIDE}),
        prev: () => dispatch({type: PREV_SLIDE})
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Slider)