import { useState } from 'react'
import React from 'react'
import ShowData from './ShowData'



const Form = ({myPicture}) => {
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        birthday: '',
        email: ''
    })
    const [flag, setFlag] = useState(false)

    const populateData = ( value, inputValue) => {
        setUserData({...userData, [inputValue]: value.target.value})
    }
    const renderCard = (e) => {
        e.preventDefault()
        if(userData.name === '' || userData.lastName === '' || userData.phoneNumber === '' || userData.birthday === '' || userData.email === '')
        alert("Please fill out all the inputs")
    else 
        setFlag(true)
    }
    const resetForm = (e) => {
        e.preventDefault()
        setFlag(false)
        setUserData({...userData, name: '',
        lastName: '',
        phoneNumber: '',
        birthday: '',
        email: ''})
    }


  return (
    <div>{ flag ? 
        <>
        <ShowData name={userData.name} lastName={userData.lastName} phoneNumber={userData.phoneNumber}
        birthday={userData.birthday} email={userData.email} myPicture={myPicture}/>
        <button onClick={(e) => resetForm(e)}>Go back to form</button>
        </>
     : 
<form>
<input onChange={(event) => populateData(event, 'name')} value={userData.name} type="text" placeholder='Name'/>
<br />
<input onChange={(event) => populateData(event, 'lastName')} value={userData.lastName} type="text" placeholder='Last Name'/>
<br />
<input onChange={(event) => populateData(event, 'phoneNumber')} value={userData.phoneNumber} type="text" placeholder='Phone Number'/>
<br />
<input onChange={(event) => populateData(event, 'birthday')} value={userData.birthday} type="text" placeholder='Birthday'/>
<br />
<input onChange={(event) => populateData(event, 'email')} value={userData.email} type="email" placeholder='email'/>
<br />
<button onClick={(e) => renderCard(e)}>Submit</button>
</form>}
</div>
  )
}

export default Form

