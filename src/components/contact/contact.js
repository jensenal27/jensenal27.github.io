import React, {useState} from 'react';
import './contact.css';

const Contact = ({inView}) => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onCompanyChange = (event) => {
        setCompany(event.target.value);
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const validate = () => {

        let emailError = '';
        let nameError = '';
        let companyError = '';
        let messageError = '';

        if (!email.includes('@')) {
            emailError = 'X';
        }
        if (name.length < 1) {
            nameError = 'X';
        }
        if (company.length < 1) {
            companyError = 'X';
        }
        if (message.length < 1) {
            messageError = 'X';
        }

        if (emailError || nameError || companyError || messageError) {
            setEmailError(emailError);
            setNameError(nameError);
            setCompanyError(companyError);
            setMessageError(messageError);
            return false;
        } else {
            return true;
        }
    }

    const onSubmit = () => {
        const isValid = validate();
        if (isValid) {
            // setIsSent(true);
            setIsLoading(true);
            fetch('https://agile-plains-44092.herokuapp.com/send', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    company: company,
                    email: email,
                    phone: phone,
                    message: message
                })
            })
            .then(function(response) {
                if (response.status !== 200) {
                    setIsLoading(false);
                    throw new Error('Not 200 Response');
                } else {
                    setIsLoading(false);
                    setIsSent(true);
                }
            }).catch(err => console.log(err));
        }
    }
    
    return (
        <>
            <div className = 'contactcontainer' data-aos='fade-up'>
                <div className = 'contactwrap'>
                    <div className ='contactsentform' id = {isSent === true ? 'visible' : 'hidden'}>
                        Thank You!<br/>Your message has been sent.
                    </div>
                    <div className = 'contactform' id = {isSent === false ? 'visible' : 'hidden'}>
                        <div className = 'contacttitle'>Contact Me</div>
                        <div className = 'contactsubtitle'><a href='mailto:jensenal27@gmail.com'>jensenal27@gmail.com</a> | (804)-335-6054</div>
                        <form method="POST" action="send" noValidate="noValidate">
                            <div className = 'formsection' id='namewrap'>
                                <input onChange={onNameChange} type="text" name="name" id="name" required/>
                                <label id='namelabel'>Name</label>
                                <div className = {nameError === '' ? 'invalid' : 'invalid-show'} id = 'invname'>{nameError}</div>
                            </div>
                            <div className = 'formsection' id='companywrap'>
                                <input onChange={onCompanyChange} type="text" name="company" id="company" required/>
                                <label id='companylabel'>Company</label>
                                <div className = {companyError === '' ? 'invalid' : 'invalid-show'} id = 'invcompany'>{companyError}</div>
                            </div>
                            <div className = 'formsection' id='emailwrap'>
                                <input onChange={onEmailChange} type="text" name="email" id="email" required/>
                                <label>Email Address</label>
                                <div className = {emailError === '' ? 'invalid' : 'invalid-show'} id = 'invemail'>{emailError}</div>
                            </div>
                            <div className = 'formsection' id='phonewrap'>
                                <input onChange={onPhoneChange} type="text" name="phone" id="phone" required/>
                                <label>Phone Number</label>
                            </div>
                            <div className = 'formsection' id='messagewrap'>
                                <textarea onChange={onMessageChange} name="message" id="message" required></textarea>
                                <label>Type your message here...</label>
                                <div className = {messageError === '' ? 'invalid' : 'invalid-show'} id = 'invmessage'>{messageError}</div>
                            </div>
                            <div onClick={onSubmit} className = 'button'>
                                <div className = 'buttontext' id = {isLoading === true ? 'loading' : ''}>
                                    {isLoading === true ? 'Working...' : 'Submit'}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;