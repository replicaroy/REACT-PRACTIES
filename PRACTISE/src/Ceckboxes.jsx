import { useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'

function Ceckboxes() {
    const [gender, setGender]=useState('male')
  return (
    <div>
     <input type="radio"  checked={gender === 'male'} onChange={()=> setGender('male')}/><br /> <br />
     <input type="radio" checked={gender === 'female'} onChange={()=> setGender('female')} /> <br /> <br /> 
     <input type="radio" checked={gender === 'others'} onChange={()=> setGender('others')} />
    </div>
  )
}

export default Ceckboxes
