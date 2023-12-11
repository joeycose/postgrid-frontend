import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface Address {
    firstName: string;
    lastName: string;
    companyName: string;
    addressLine1: string;
    city: string;
    provinceOrState: string;
    postalOrZip: string;
    countryCode: string;
}

interface LetterData {
    id: string;
    description: string;
    pdf: string;
    to: Address;
    from: Address;
}

export const RetrieveLetterById: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [letterData, setLetterData] = useState<LetterData>({
        id: '',
        description: '',
        pdf: '',
        to: {
            firstName: '',
            lastName: '',
            companyName: '',
            addressLine1: '',
            city: '',
            provinceOrState: '',
            postalOrZip: '',
            countryCode: '',
        },
        from: {
            firstName: '',
            lastName: '',
            companyName: '',
            addressLine1: '',
            city: '',
            provinceOrState: '',
            postalOrZip: '',
            countryCode: '',
        },
    });

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetterData((prevData) => ({
            ...prevData,
            id: e.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/retrieve-letter/${letterData.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            if (responseData.error) {
                alert('Letter not found');
                return;
            }
            console.log('Letter retrieved:', responseData);
            // Handle success (alert, display data, etc.)
            setLetterData(responseData.letter.letter);
        } catch (error) {
            console.error('Error:', error);
            // Handle errors (alert user, display message, etc.)
        }
    };

    return (
        <Form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <Row>
                <Col>
                    <Form.Group controlId="id">
                        <Form.Label>Letter ID:</Form.Label>
                        <Form.Control
                            type="text"
                            name="id"
                            value={letterData.id}
                            onChange={handleIdChange}
                        />
                    </Form.Group>
                </Col>
            </Row>


            <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
                Retrieve Letter
            </Button>

            {letterData.id && (
                <div>
                    <h2>Letter Details</h2>
                    <p>
                        <b>From:</b> {letterData.from.firstName} {letterData.from.lastName}
                    </p>
                    <p>{letterData.from.companyName}</p>
                    <p>{letterData.from.addressLine1}</p>
                    <p>
                        {letterData.from.city}, {letterData.from.provinceOrState} {letterData.from.postalOrZip}
                    </p>
                    <p>{letterData.from.countryCode}</p>
                    <p>
                        <b>To:</b> {letterData.to.firstName} {letterData.to.lastName}
                    </p>
                    <p>{letterData.to.companyName}</p>
                    <p>{letterData.to.addressLine1}</p>
                    <p>
                        {letterData.to.city}, {letterData.to.provinceOrState} {letterData.to.postalOrZip}
                    </p>
                    <p>{letterData.to.countryCode}</p>
                    <p>
                        <b>Description:</b> {letterData.description}
                    </p>
                </div>
            )}
        </Form>
    );
};

export default RetrieveLetterById;