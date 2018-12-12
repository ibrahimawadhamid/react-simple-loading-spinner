import React from 'react';
import './index.css';

class LoadingSpinner extends React.Component {
    render() {
        const color = this.props.color ? this.props.color : '#20a8d8';
        const divStyle = {
            position: 'absolute',
            border: '4px solid ' + color,
            opacity: '1',
            borderRadius: '50%',
            animation: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite'
        };
        return (
            <div className="lds-ripple">
                <div style={divStyle}></div>
                <div style={divStyle}></div>
            </div>
        );
    }
}

export default LoadingSpinner;
