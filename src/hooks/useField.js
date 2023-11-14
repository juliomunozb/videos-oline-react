import { useState } from 'react'

export default function useField ({ type }) {
  const [value, setValue] = useState('')
  const onChange = event => {
    console.log(event.target.name, ':', event.target.value)
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}
