import React from 'react';
import './index.css';
class LoadingSpinner extends React.Component {
    render() {
        return (
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        );
    }
}
export default LoadingSpinner;
