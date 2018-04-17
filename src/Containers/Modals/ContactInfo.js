import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ContactInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    triggerModal = () => {
        this.setState({open: !this.state.open});
    }

    render() {

        const { /*accountInfo,*/ userInfo } = this.props;

        return (
            <Modal
                open={this.state.open}
                onClose={this.triggerModal}
                trigger={<Link to='#' onClick={() => this.triggerModal()}>Academic Evaluation</Link>}>
                <Modal.Header>Contact Information</Modal.Header>
                <Modal.Content image scrolling>
                    <Image
                        size='medium'
                        src={require('../../Assets/GeorgiaStateLogo.png')}
                        wrapped
                    />

                    <Modal.Description>
                        {/* <Header>{userInfo.firstName} {userInfo.lastName}</Header>
                        <span><strong>Current Major: </strong></span><span style={{float:'right'}}>{userInfo.major}</span> */}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <Button primary onClick={() => this.triggerModal()}>
                    Finish <Icon name='right chevron' />
                </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}