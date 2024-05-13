import React, { Component } from 'react';
import styles from './businessCard.module.css'; // Import CSS module

class BusinesscardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      lastname: 'Last Name',
      address: 'Address',
      companyName: 'Company Name',
      phoneNumber: 'Phone Number',
      email: 'E-mail',
      website: 'Website'
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastname: event.target.value
    });
  }

  handleChangeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }

  handleChangeCompanyName(event) {
    this.setState({
      companyName: event.target.value
    });
  }

  handleChangePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeWebsite(event) {
    this.setState({
      website: event.target.value
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <form>
          <div className={styles.box}>
            <h1>Business Card</h1>

            <input
              className={styles.name}
              placeholder={this.state.name}
              type='text'
              onChange={this.handleChangeName}
            />

            <input
              className={styles.lastName}
              placeholder={this.state.lastname}
              type='text'
              onChange={this.handleChangeLastName}
            />

            <input
              className={styles.address}
              placeholder={this.state.address}
              type='text'
              onChange={this.handleChangeAddress}
            />

            <input
              className={styles.company}
              placeholder={this.state.companyName}
              type='text'
              onChange={this.handleChangeCompanyName}
            />

            <input
              className={styles.phone}
              placeholder={this.state.phoneNumber}
              type='text'
              onChange={this.handleChangePhoneNumber}
            />

            <input
              className={styles.eMail}
              placeholder={this.state.email}
              type='text'
              onChange={this.handleChangeEmail}
            />

            <input
              className={styles.webSite}
              placeholder={this.state.website}
              type='text'
              onChange={this.handleChangeWebsite}
            />
          </div>
        </form>

        <div className={styles.cardDiv}>
          <div className={styles.card}>
            <h1 className={styles.cardName}>{this.state.name} {this.state.lastname}</h1>
            <h2 className={styles.cardCompanyName}>{this.state.companyName}</h2>
            <hr />
            <p className={styles.cardAddress}>{this.state.address}</p>
            <p className={styles.cardPhoneNumber}>{this.state.phoneNumber}</p>
            <hr />
            <p className={styles.cardEmail}>{this.state.email}</p>
            <p className={styles.cardWebsite}>{this.state.website}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinesscardForm;
