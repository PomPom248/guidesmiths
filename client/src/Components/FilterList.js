import React, { Component } from 'react';
import PhoneService from '../Services/phone-service'
import PhoneCatalogue from './PhoneCatalogue'
import { CircleLoader } from 'react-spinners'
import { FaSearch } from 'react-icons/fa';
import { Fade } from 'react-reveal';

export default class FilterList extends Component {
    constructor() {
        super()
        this.state = {
            phoneList: '',
            phoneListCopy: '',
            queryModel: '',
            show: false
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

    showSearchBox = () => {
        this.setState({ show: !this.state.show });


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
        const { phoneListCopy, queryModel, show } = this.state
        const innerHeight = (window.innerHeight - 100)
        return (
            <>
                <div style={{ textAlign: 'left' }}>
                    <button onClick={this.showSearchBox} className='searching-btn'> <FaSearch /></button>
                    <Fade left when={show}>
                        <input
                            value={queryModel}
                            type='text'
                            name='modelQuery'
                            onChange={this.filter}
                            placeholder='Search by Model...'
                            className='searchbox-input'
                        />
                    </Fade>
                </div>
                <h1 style={{ fontSize: '4rem' }}>Phone Catalogue</h1>
                {phoneListCopy ?
                    <PhoneCatalogue phoneList={phoneListCopy} /> :
                    <div className='spinner' style={{ height: innerHeight }}>
                        <CircleLoader
                            sizeUnit={"px"}
                            size={80}
                            color={'#d75636'} />
                    </div>
                }
            </>
        );
    }
}
