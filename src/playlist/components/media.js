import React, {Component} from 'react';
import './media.css';

class Media extends Component {
    render() {

        return(
            <div className="Media">
                <div>
                    <img src="./images/covers/bitcoin.jpg" alt="" width={260} height={160}></img>
                    <h3>{this.props.title}</h3>
                    <p>Kevin Garzon</p>
                </div>
            </div>
        )
    }   
}

export default Media;