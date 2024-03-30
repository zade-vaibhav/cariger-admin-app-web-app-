import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./newKariger.css"

const NewKarigar = () => {

    const [phone,setPhone]=useState("")
    console.log(phone)

    const handleOnChange = (value, country, event) => {
        // Remove any non-digit characters from the phone number
        const formattedPhone = value.replace(/\D/g, '');
        // Format the phone number according to the desired format
        let formattedPhoneNumber = '';
        if (formattedPhone.length > 7) {
          formattedPhoneNumber += formattedPhone.slice(0, 7) + ' ';
          formattedPhoneNumber += formattedPhone.slice(7);
        } else {
          formattedPhoneNumber += formattedPhone.slice(0);
        }
        setPhone(`+${formattedPhoneNumber}`);
      };

      console.log(phone)
    return (
        <div className='container'>
            <div class="form_container">
                <div class="title">Registration</div>
                <div class="content">
                    <form >
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Username</span>
                                <input type="text" placeholder="Enter your username" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="email" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <PhoneInput
                                    country={'in'} 
                                    value={phone}
                                    onChange={handleOnChange}
                                    inputStyle={{ marginLeft:25,width: '90%' }} 
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter your password" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Address</span>
                                <input type="text" placeholder="Confirm your password" required />
                            </div>
                        </div>
                        <div class="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span class="gender-title">Gender</span>
                            <div class="category">
                                <label for="dot-1">
                                    <span class="dot one"></span>
                                    <span class="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span class="dot two"></span>
                                    <span class="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span class="dot three"></span>
                                    <span class="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default NewKarigar
