import React, { Component } from 'react';
import PhoneService from '../Services/phone-service'
import { CircleLoader } from 'react-spinners'
import PhoneCatalogue from './PhoneCatalogue';
export default class IndexCard extends Component {
    constructor() {
        super()
        this.state = {
            listOfPhones: ''
        }
        this.service = new PhoneService()
    }
    componentDidMount() {
        this.getAll()
    }
    getAll = () => {
        this.service.getAll()
            .then((response) =>
                this.setState({
                    listOfPhones: response.phone
                }))
            .catch(e => console.log(e))
    }
    render() {
        const { listOfPhones } = this.state
        return (
            <div >
                <h1>Phone Catalogue</h1>
                {listOfPhones ?
                    <PhoneCatalogue phoneList={listOfPhones} /> :
                    <CircleLoader />
                }
            </div>
        );
    }
}

