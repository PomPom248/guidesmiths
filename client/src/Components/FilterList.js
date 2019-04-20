import React, { Component } from 'react';
import PhoneService from '../Services/phone-service'
import PhoneCatalogue from './PhoneCatalogue'
import { CircleLoader } from 'react-spinners'

export default class FilterList extends Component {
    constructor() {
        super()
        this.state = {
            phoneList: '',
            phoneListCopy: '',
            queryModel: ''
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
                    phoneList: response.phone,
                    phoneListCopy: response.phone
                }))
            .catch(e => console.log(e))
    }


    filter = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ queryModel: e.target.value })
        this.setState({ [name]: value }, () => {
            const filtered = [...this.state.phoneList]
            const filteredList = filtered.filter(phone => {
                const { queryModel, phoneList, } = this.state
                return queryModel === '' ? phoneList : phone.model.toLowerCase().includes(queryModel.toLowerCase())
            })
            this.setState({
                phoneListCopy: filteredList
            })
        });
    }


    render() {
        const { phoneListCopy, queryModel } = this.state
        const innerHeight = (window.innerHeight - 100)
        return (
            <>
                <input
                    value={queryModel}
                    type='text'
                    name='modelQuery'
                    onChange={this.filter}
                    placeholder='Search by Model...'
                    className='searchbox-input'
                />

                {phoneListCopy ?
                    <PhoneCatalogue phoneList={phoneListCopy} /> :
                    <div className='spinner' style={{ height: innerHeight }}>
                        <CircleLoader
                            sizeUnit={"px"}
                            size={80}
                            color={'#36D7B7'} />
                    </div>
                }
            </>
        );
    }
}
