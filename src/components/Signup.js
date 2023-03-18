import React from 'react'
import {  useFormik } from 'formik';

import validations from './validations';

function Signup() {
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: { 
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         passwordConfirm:'',
         gender: '',
         hobies: [],
         country:'turkey',
             },
             onSubmit: values => {
               console.log(values);
             },
             userSchema: validate( fetchUser())
            });

  return (
    <div>
        <h1>Sign Up</h1>
    
    <form onSubmit={handleSubmit}>
  <label htmlFor="firstName">First Name</label>
  <input name="firstName" value={values.firstName} onChange={handleChange} ></input>

  <br></br>
  <br></br>

  <label htmlFor="lastName">Last Name</label>
  <input name='lastName' value={values.lastName} onChange={handleChange} ></input>

  <br></br>
  <br></br>

  <label htmlFor="email">Email</label>
  <input name='email' value={values.email} onChange={handleChange} ></input>

  <br></br>
  <br></br>

  <label htmlFor="password">Password</label>
  <input name='password' value={values.password} onChange={handleChange} ></input>

  <br></br>
  <br></br>

  <label htmlFor="passwordConfirm">Password Confirm</label>
  <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} ></input>


  <br></br>
  <br></br>

  <span>Male</span>
  <input 
  type='radio' 
  name='gander' 
  value='male' 
  onChange={handleChange}
  
  />
  <span>Female</span>
  <input 
  type='radio' 
  name='gander' 
  value='female' 
  onChange={handleChange}
  
  />
  <br></br>
  <br></br>
  <div>
    Football
    <input type={'checkbox'} name="hobies" value={"Football"} onChange={handleChange} values={values.hobies}/>
  </div>

  <div>
    Pc game
    <input type={'checkbox'} name="hobies" value={"Pc game"} onChange={handleChange} values={values.hobies}/>
  </div>

  <div>
    Codeding
    <input type={'checkbox'} name="hobies" value={"codeing"} onChange={handleChange} values={values.hobies}/>
  </div>
  
  <br></br>
  <br></br>

  <select name='country' value={values.country} onChange={handleChange} >
  
    <option value={"turkey"}>Tr</option>
    <option value={"de"}>De</option>
    <option value={"usa"}>Usa</option>
  </select>
  

  <br></br>
  <br></br>

  <button type="submit">Submit</button>

 <br></br>
  <br></br>

  {JSON.stringify(values)} 
  
</form>
    </div>
  )
}

export default Signup