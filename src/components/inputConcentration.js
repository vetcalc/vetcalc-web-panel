import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { key: 'mg/ml', text: 'mg/ml', value: 'mg/ml' },
  { key: 'ug/ml', text: 'ug/ml', value: 'ug/ml' },
  { key: 'varies', text: 'varies', value: 'varies' },
]

const InputConcentration = () => (
  <Input
    label={<Dropdown defaultValue='mg/ml' options={options} />}
    labelPosition='right'
    placeholder='Concentration'
    
  />
)

export default InputConcentration