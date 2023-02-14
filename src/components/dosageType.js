import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'


const typeOptions = [
  { key: 'IM', text: 'IM', value: 'IM' },
  { key: 'IV', text: 'IV', value: 'IV' },
  { key: 'PO', text: 'PO', value: 'PO' },
]

const DosageType = () => (
  <Input
    label={<Dropdown defaultValue='IM' options={typeOptions} />}
    labelPosition='right'
    placeholder='Dosage'
    value={(e) => this.setState({ dosage: e.target.value })}
    
  />
)

export default DosageType