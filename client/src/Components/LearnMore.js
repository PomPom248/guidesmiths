import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class LearnMore extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state
        const { phoneInfo } = this.props
        return (
            <>
                <button className='learn-more-btn' onClick={this.onOpenModal}>Learn More</button>
                <Modal
                    open={open}
                    onClose={this.onCloseModal}
                    center
                    animationDuration={1000}
                >
                    <div className='flex-display-center'>
                        <h1 className='phone-name-modal'>{phoneInfo.model}</h1>
                        <p className='brand'> {phoneInfo.brand}</p>
                    </div>
                    <div className='flex-display'>
                        <div className='width-fifty'>
                            <img src={phoneInfo.image} alt={phoneInfo.model} className='modal-image' />
                        </div>
                        <div className='width-fifty'>
                            <p><span>First Release:</span> {phoneInfo.firstRelease}</p>
                            <p><span>Dimensions: </span></p>
                            <ul>
                                <li><span>Height:</span> {phoneInfo.dimensions.height}</li>
                                <li><span>Width:</span> {phoneInfo.dimensions.width}</li>
                                <li><span>Mass:</span> {phoneInfo.dimensions.mass}</li>
                            </ul>
                            <p><span>Memory:</span> {phoneInfo.memory}</p>
                            <p><span>Battery: </span> {phoneInfo.battery}</p>
                            <p><span>Storage:</span> {phoneInfo.storage}</p>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}