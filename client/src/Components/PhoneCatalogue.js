import React, { Component } from 'react';
import LearnMore from './LearnMore'
export default class PhoneCatalogue extends Component {
    render() {
        const { phoneList } = this.props

        return (
            <div className='phone-display'>
                {phoneList.map((phone) => {
                    return (
                        <div key={phone._id} className='each-phone'>
                            <h2 style={{ zIndex: '1' }}>{phone.model}</h2>
                            <img src={phone.image} alt={phone.model} className='individual-image' />
                            <LearnMore phoneInfo={phone} />
                        </div>
                    )
                })}
            </div>
        );
    }
}