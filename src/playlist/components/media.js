import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.author
        }
   }
//    handleClick(event) {
//        console.log(this.props.author);
    //    }
    handleClick = (event)=>{
        console.log(this.props.images);
        this.setState({ //cambiar estados de un props
            author:'Kevin Rodriguez'
        });
    }
    render() {
        return(
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img
                     src={this.props.images}
                     alt=""
                     width={260}
                     height={160}>
                     </img>
                    <h3> {this.props.title} </h3>
                    <p> {this.state.author} </p>
                </div>
            </div>
        )
    }  
     
}
Media.propTypes = {
    images: PropTypes.string,
    title: PropTypes.string,
}
export default Media;