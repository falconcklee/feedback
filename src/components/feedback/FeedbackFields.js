import { useRef } from 'react';
import css from '../../bootstrap-5.1.3/css/bootstrap.css'
import { Alert, Form } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { Overlay } from 'react-bootstrap';

function FeedbackFields(props){
    const [isShowSuccessAlert, setShowSuccessAlert] = useState(false);
    const [isShowFailAlert, setShowFailAlert] = useState(false);
    const [isShowTooltip, setShowToolTip] = useState(false);
    // const targetPhone = useRef(null);


    const salutationInputRef = useRef();
    const nameInputRef = useRef();
    const emailIinputRef = useRef();
    const phoneInputRef = useRef();
    const topicInputRef = useRef();
    const subjectInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const salutationInput = salutationInputRef.current.value;
        const nameInput = nameInputRef.current.value;
        const emailInput = emailIinputRef.current.value;
        const phoneInput = phoneInputRef.current.value;
        const topicInput = topicInputRef.current.value;
        const subjectInput = subjectInputRef.current.value;
        const feedbackInput = feedbackInputRef.current.value;

        const feedbackData = {
            salutation: salutationInput,
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            topic: topicInput,
            subject: subjectInput,
            feedback: feedbackInput,
        };

        // console.log(feedbackData);
        props.onAddFeedback(feedbackData);
        setShowSuccessAlert(true);

    }

    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            {isShowSuccessAlert && 
                <Alert variant="success"> 
                    Feedback was submitted.
                </Alert>}
            {<h1>Feedback</h1>}
            {<span className='small'>Would appreciate your thoughts</span>}
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} className="mb-3" controlId="salutation">
                    <Form.Label column sm={2} className={css['form-label']}>Salutation</Form.Label>
                    <Col sm={5}>
                        <Form.Select ref={salutationInputRef}>
                            <option value="">-- Please Select --</option>
                            <option value="mr">Mr</option>
                            <option value="mrs">Mrs</option>
                            <option value="ms">Ms</option>
                            <option value="miss">Miss</option>
                            <option value="mdm">Mdm</option>
                            <option value="dr">Dr</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2} className={css['form-label']}>Your name *</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" ref={nameInputRef} required />
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm={2} className={css['form-label']}>Your email *</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="email" ref={emailIinputRef} required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="phone">
                    <Form.Label column sm={2} className={css['form-label']}>Your phone #</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="tel" pattern="[0-9]{10}" ref={phoneInputRef} onFocus={() => setShowToolTip(true)} onBlur={() => setShowToolTip(false)} />
                        <Overlay target={phoneInputRef.current} show={isShowTooltip} placement="right">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                            <div
                                {...props}
                                style={{
                                backgroundColor: '#e8560a',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                                }}
                            >
                                10 digit without space or - 
                            </div>
                            )}
                        </Overlay>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="topic">
                    <Form.Label column sm={2} className={css['form-label']}>Topic</Form.Label>
                    <Col sm={5}>
                        <Form.Select ref={topicInputRef}>
                            <option value="0">General</option>
                            <option value="1">Sales</option>
                            <option value="2">Admin</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="subject">
                    <Form.Label column sm={2} className={css['form-label']}>Subject *</Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" ref={subjectInputRef} required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="feedback">
                    <Form.Label column sm={2} className={css['form-label']}>Your feedback*</Form.Label>
                    <Col sm={5}>
                        <Form.Control as="textarea" ref={feedbackInputRef} required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="buttonGroup">
                    <Col sm={2}></Col>
                    <Col sm={5}>
                        <Button as="input" type="submit" value="Submit" />
                    </Col>
                    
                </Form.Group>
            </Form>
        </Stack>
    );
}


export default FeedbackFields;