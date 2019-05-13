import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'

class DetailModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Detail
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.profile.name}</h4>
                    <p>Height: {this.props.profile.height}</p>
                    <p>Mass: {this.props.profile.mass}</p>
                    <p>Hair Color: {this.props.profile.hair}</p>
                    <p>Skin Color: {this.props.profile.skin}</p>
                    <p>Eye Color: {this.props.profile.eye}</p>
                    <p>Birth Year: {this.props.profile.year}</p>
                    <p>Gender: {this.props.profile.gender}</p>
                </Modal.Body>
            </Modal>
        )
    }
}

export default DetailModal;