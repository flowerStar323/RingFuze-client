import {useState, useEffect } from 'react'
import { Row, Col, Card, CardBody, Button, FormGroup, Input} from 'reactstrap'
import Form from 'reactstrap/lib/Form'
import Select from 'react-select'
import PickerDefault from '../forms/form-elements/datepicker/PickerDefault'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { List, Grid, Search } from 'react-feather'
const Filter = () => {
const [region, setRegion] = useState(options[0])
const [currentCountry, setCurrentCountry] = useState(null)
const [view, setview] = useState(false)
const onchangeSelect = (item) => {
 setCurrentCountry(null)
 setRegion(item)
}
  return (
    
        <div className="filter">
          <Card>
            <CardBody>
                <Form>
                  <Row className="align-items-center">
                    <Col md={3} className="mb-1 mb-md-0">
                      <Button.Ripple className='btn-icon mr-2 active' color='primary' onClick={onGrid}>
                        <List size={22} />
                      </Button.Ripple>
                      <Button.Ripple className='btn-icon' color='primary' onClick={onlist}>
                        <Grid size={22} />
                      </Button.Ripple>
                      </Col>
                      <Col md={3} className="mb-1 mb-md-0">
                      <FormGroup  className="mb-0">
                      <Select
                            value={region}
                            onChange={onchangeSelect}
                            options={options}
                            getOptionValue={(option) => option.value}
                            getOptionLabel={(option) => option.value}
                            placeholder="Filter Type"
                          />
                          </FormGroup>
                      </Col>
                      <Col md={3} className="mb-1 mb-md-0">
                      <FormGroup className='mb-0' >
                        <PickerDefault />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                      <FormGroup className="custom-search-input mb-0">
                          <Input type='email' id='basicInput' placeholder='Enter Email' />
                          <Search size="16" className="search" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>
        </div>
  )
}

export default Filter
