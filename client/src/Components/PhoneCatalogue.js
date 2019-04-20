import React, { Component } from 'react';
export default class PhoneCatalogue extends Component {

    render() {
        const { phoneList } = this.props
        console.log(phoneList);

        return (
            <div >
                {phoneList.map((phone) => {
                    return (
                        <div key={phone._id}>
                            <h2>{phone.model}</h2>
                            <h3>{phone.brand}</h3>
                            <p>{phone.dimensions.height}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}


// dimensions, height,width,mass
//firstRelease
//memory
//model
//battery
//storage