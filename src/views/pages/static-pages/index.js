import {useState, useEffect } from 'react'
import { Row, Col, TabContent, TabPane, Card, CardBody, Button, FormGroup, Input} from 'reactstrap'
import Table from '../../pages/static-pages/list_table'
import  FileUploaderBasic from '../../forms/form-elements/file-uploader/FileUploaderBasic.js'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import Form from 'reactstrap/lib/Form'
import Select from 'react-select'
import PickerDefault from '../../forms/form-elements/datepicker/PickerDefault'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// import InputBasic from '../forms/form-elements/input/InputBasic'
//import img_file from '../../assets/images/svg/image-deffault.svg'
import { List, Grid, Search } from 'react-feather'
const StaticPages = () => {
  const options = [
    { value: "Author " },
    { value: "Author 1" },
    { value: "Author 2" }
]
const [region, setRegion] = useState(options[0])
const [currentCountry, setCurrentCountry] = useState(null)
const [view, setview] = useState(false)
const onchangeSelect = (item) => {
 setCurrentCountry(null)
 setRegion(item)
}
 const onGrid = () => {
  setview(true)
  console.log('red')
 }
 
 const onlist = () => {
 // setCurrentCountry(true)
 setview(false) 
 console.log('blue')
}
  return (
    <div className="static-page">
        <div className="filter">
          <Card>
            <CardBody>
                <Form>
                  <Row className="align-items-center">
                    {/* <Col md={3} className="mb-1 mb-md-0">
                      <Button.Ripple className='btn-icon mr-2 active' color='primary' onClick={onGrid}>
                        <List size={22} />
                      </Button.Ripple>
                      <Button.Ripple className='btn-icon' color='primary' onClick={onlist}>
                        <Grid size={22} />
                      </Button.Ripple>
                      </Col> */}
                      <Col md={4} className="mb-1 mb-md-0">
                      <FormGroup className='mb-0' >
                        <PickerDefault />
                        </FormGroup>
                      </Col>
                      <Col md={4} className="mb-1 mb-md-0">
                      <FormGroup  className="mb-0">
                      <Select
                            value={region}
                            onChange={onchangeSelect}   
                            options={options}
                            getOptionValue={(option) => option.value}
                            getOptionLabel={(option) => option.value}
                            placeholder="Author"
                          />
                          </FormGroup>
                      </Col>
                      
                      <Col md={4}>
                      <FormGroup className="custom-search-input mb-0">
                          <Input type='text' id='basicInput' placeholder='search...' />
                          <Search size="16" className="search" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>
        </div>
        
        <div className>
          <Table />
        </div>
    </div>
  )
}

export default StaticPages
