import React, { useState } from 'react';

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
    description: string;
    pdf: string;
    to: Address;
    from: Address;
}

export const CreateLetter: React.FC = () => {
    const [letterData, setLetterData] = useState<LetterData>({
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
            countryCode: 'US',
        },
        from: {
            firstName: '',
            lastName: '',
            companyName: '',
            addressLine1: '',
            city: '',
            provinceOrState: '',
            postalOrZip: '',
            countryCode: 'US',
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, section: 'to' | 'from') => {
        const { name, value } = e.target;
        setLetterData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetterData(prevData => ({
            ...prevData,
            description: e.target.value,
        }));
    };

    const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetterData(prevData => ({
            ...prevData,
            pdf: e.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/create-letter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(letterData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Letter created:', responseData);
            // Reset form or handle success (alert, redirect, etc.)
        } catch (error) {
            console.error('Error:', error);
            // Handle errors (alert user, display message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={letterData.description}
                        onChange={handleDescriptionChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    PDF URL:
                    <input
                        type="text"
                        name="pdf"
                        value={letterData.pdf}
                        onChange={handlePdfChange}
                    />
                </label>
            </div>
            <fieldset>
                <legend>To Address:</legend>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={letterData.to.firstName}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={letterData.to.lastName}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        value={letterData.to.companyName}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    Address Line 1:
                    <input
                        type="text"
                        name="addressLine1"
                        value={letterData.to.addressLine1}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={letterData.to.city}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    State/Province:
                    <input
                        type="text"
                        name="provinceOrState"
                        value={letterData.to.provinceOrState}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    Postal/Zip Code:
                    <input
                        type="text"
                        name="postalOrZip"
                        value={letterData.to.postalOrZip}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
                <label>
                    Country Code:
                    <input
                        type="text"
                        name="countryCode"
                        value={letterData.to.countryCode}
                        onChange={(e) => handleInputChange(e, 'to')}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>From Address:</legend>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={letterData.from.firstName}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={letterData.from.lastName}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        value={letterData.from.companyName}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    Address Line 1:
                    <input
                        type="text"
                        name="addressLine1"
                        value={letterData.from.addressLine1}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={letterData.from.city}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    State/Province:
                    <input
                        type="text"
                        name="provinceOrState"
                        value={letterData.from.provinceOrState}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    Postal/Zip Code:
                    <input
                        type="text"
                        name="postalOrZip"
                        value={letterData.from.postalOrZip}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
                <label>
                    Country Code:
                    <input
                        type="text"
                        name="countryCode"
                        value={letterData.from.countryCode}
                        onChange={(e) => handleInputChange(e, 'from')}
                    />
                </label>
            </fieldset>

            <button type="submit">Create Letter</button>
        </form>
    );
};

export default CreateLetter;