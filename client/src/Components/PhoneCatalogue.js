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
                        </div>
                    )
                })}
            </div>
        );
    }
}
