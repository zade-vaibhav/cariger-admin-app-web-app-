import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./newKariger.css"
import * as Yup from "yup"
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const NewKarigar = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false);


    const [errors, setErrors] = useState({});


    const validationSchema = Yup.object({
        name: Yup.string().required("name is required"),
        userName: Yup.string().required("userName is required"),
        phone: Yup.string().matches(/^\+\d{7}\s\d{5}$/, "Invalid Phone Number"), 
        designation:Yup.string().required("designation is required"),
        address: Yup.string().required("Address is Required"),
        password: Yup.string()
            .min(8, "Password must be minimum 8 characters")
            .required("Password is Required"),
        gender: Yup.string().required("Gender is Required")
    });

    
    

    const [formData,setFormData] =useState({
        name:"",
        userName:"",
        phone:"",
        designation:"",
        password:"",
        address:"",
        gender:""
})


const handlePhoneChange = (value, country, e) => {
    // Remove non-digit characters and trim to first 12 digits if longer
    let numericValue = value.replace(/\D/g, '').slice(0, 12);

    // Apply custom formatting
    if (numericValue.length > 7) {
        numericValue = `+${numericValue.slice(0, 7)} ${numericValue.slice(7)}`;
    } else {
        numericValue = `+${numericValue}`;
    }

    setFormData({
        ...formData,
        phone: numericValue
    });
};

const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(formData)
    try{
        const validForm=await validationSchema.validate(formData,{abortEarly:false})
        console.log("validForm",validForm)
        const res = await axios.post("http://localhost:4040/api/v1/auth/laborRegister",validForm)
        console.log(res)

        if(res.status === 201){
            setOpenSnackbar(true);
            setFormData({         
                name: "",
                userName: "",
                designation:"",
                phone: "",
                password: "",
                address: "",
                gender: ""
            });}
        
        

    }catch(err){
        if (err.inner && Array.isArray(err.inner)) {
            console.log(err.inner);
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        } else {
            // General error handling if 'inner' is not available
            console.log("An error occurred:", err.message || "Unknown error");
            setErrors({ general: "An error occurred. Please try again." });
        }
    }

}
const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
        ...formData,
        [name]: value,
    });
}

    // const [phone,setPhone]=useState("")
    // console.log(phone)

    // const handleOnChange = (value, country, event) => {
    //     // Remove any non-digit characters from the phone number
    //     const formattedPhone = value.replace(/\D/g, '');
    //     // Format the phone number according to the desired format
    //     let formattedphone = '';
    //     if (formattedPhone.length > 7) {
    //       formattedphone += formattedPhone.slice(0, 7) + ' ';
    //       formattedphone += formattedPhone.slice(7);
    //     } else {
    //       formattedphone += formattedPhone.slice(0);
    //     }
    //     setPhone(+${formattedphone});
    //   };

    //   console.log(phone)
    return (
        <div className='container' onSubmit={handleSubmit}>
            <div className="form_container">
                <div className="title">Registration</div>
                <div className="content">
                    <form  >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                 value={formData.name}
                                  type="text" 
                                  name="name"
                                  onChange={handleChange}
                                  placeholder="Enter your name" required />
                                  {errors.name && <div className='errors'> {errors.name}    </div>}
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input 
                                  value={formData.userName}
                                  onChange={handleChange}
                                  name="userName"
                                type="text" 
                                placeholder="Enter your username" required />
                                {errors.Username && <div className='errors'> {errors.Username}    </div>}
                            </div>
                            <div className="input-box">
                                <span className="details">Designation</span>
                                <input 
                                  value={formData.designation}
                                  onChange={handleChange}
                                  name="designation"
                                type="text" 
                                placeholder="Enter your designation" required />
                                {errors.designation && <div className='errors'> {errors.designation}    </div>}
                            </div>
                           
                             <div className="input-box">
                                <span className="details">Phone Number</span>
                                <PhoneInput
                                    country={'in'} 
             
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    name="phone"
                                    
                                    inputStyle={{ marginLeft:25,width: '90%' }} 
                                    placeholder="Enter phone number"
                                />
                                {errors.phone && <div className='errors'> {errors.phone}    </div>}
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                   value={formData.password} 
                                   onChange={handleChange}
                                   name="password"
                                type="password" placeholder="Enter your password" required />
                                 {errors.password && <div className='errors'> {errors.password}    </div>}
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input
                                   value={formData.address}
                                   name="address"
                                   onChange={handleChange}
                                type="text" placeholder="Address" required />
                                        {errors.Address && <div className='errors'> {errors.Address}    </div>}
                            </div>
                        </div>
                        <div className="gender-details">
    <input 
        type="radio" name="gender" id="dot-1" value="Male"
        checked={formData.gender === 'Male'} 
        onChange={(e) => setFormData({...formData, gender: e.target.value})}
    />
    <input 
        type="radio" name="gender" id="dot-2" value="Female"
        checked={formData.gender === 'Female'} 
        onChange={(e) => setFormData({...formData, gender: e.target.value})}
    />
    <input 
        type="radio" name="gender" id="dot-3" value="N/A"
        checked={formData.gender === 'N/A'} 
        onChange={(e) => setFormData({...formData, gender: e.target.value})}
    />
    <span className="gender-title">Gender</span>
    <div className="category">
        <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
        </label>
        <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
        </label>
        <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
        </label>
    </div>
</div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
    <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
        User registered successfully!
    </Alert>
</Snackbar>
        </div>
    )

}

export default NewKarigar