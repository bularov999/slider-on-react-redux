import React, { Component } from 'react'
import srcImg from '../../images-data/img-data.js'
import './slides.css'
import { connect } from 'react-redux'

class Slides extends Component {
    constructor(props){
        super(props)
    }
   

    render(){
        return(
        <div className="slides">
            <img src={srcImg[this.props.slideState].src} alt="img"/>
        </div>
        )
        
    }
}
    const mapStateToProps = (state) => {
        return{
        slideState : state.slideReducer
        }
    }

export default  connect(mapStateToProps , null)(Slides)
