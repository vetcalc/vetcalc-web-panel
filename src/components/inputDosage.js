import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const unitOptions = [
  { key: 'mg/kg', text: 'mg/kg', value: 'mg/kg' },
  { key: 'µg/kg', text: 'µg/kg', value: 'µg/kg' },
  { key: 'ml/kg', text: 'ml/kg', value: 'ml/kg' },
]

const typeOptions = [
  { key: 'IM', text: 'IM', value: 'IM' },
  { key: 'IV', text: 'IV', value: 'IV' },
  { key: 'PO', text: 'PO', value: 'PO' },
]

const InputDosage = () => (
  <Input
    label={<Dropdown defaultValue='mg/ml' options={unitOptions} />}
    labelPosition='right'
    placeholder='Dosage'
  />
)
// (
//   <Input
//     label={<Dropdown defaultValue='IM' options={typeOptions} />}
//     labelPosition='right'
//     placeholder='type'
//   />
  
// )

export default InputDosage