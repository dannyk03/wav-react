import React from 'react';
import {
    Modal,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    FormControl
} from 'react-bootstrap';

import BaseComponent from '../shared/BaseComponent';

export default class AddEditDialog extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        const { voter = {}} = this.props;
        this.state = voter;
    }

    renderField = (name, label) => {
        return (
            <Col md={6}>
                { label }
                <FormControl type="text"
                             value={this.state[name] || ''}
                             onChange={(e) => this.setState({ [name]: e.target.value })}/>
            </Col>
        )
    };

    onSubmitInner = () => {
        this.props.onSubmit(this.state);
    };

    render() {
        const {
            show,
            onClose,
            submitText,
            title='',
            disableEmail = true
        } = this.props;
        const { gender } = this.state;
        return (
            <Modal show={show}
                   onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        { disableEmail && <FormGroup>
                            <Col md={12}>
                                Email
                                <FormControl type="email"
                                             disabled
                                             value={this.state['email'] || ''} />
                            </Col>
                        </FormGroup> }
                        <FormGroup>
                            { this.renderField('firstname', 'First name') }
                            { this.renderField('lastname', 'Last name') }
                        </FormGroup>
                        <FormGroup>
                            <Col md={6}>
                                Gender
                                <FormControl componentClass="select"
                                             value={gender}
                                             onChange={e => this.setState({ gender: e.target.value })} >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </FormControl>
                            </Col>
                            { this.renderField('city', 'City') }
                        </FormGroup>
                        <FormGroup>
                            { this.renderField('address', 'Address') }
                            { this.renderField('phonenumber', 'Phone') }
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col md={12} className="btn-container">
                            <Button className='btn-primary' onClick={this.onSubmitInner}>{submitText}</Button>
                            <Button className='btn-primary' onClick={onClose}>Cancel</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        );
    }
}
