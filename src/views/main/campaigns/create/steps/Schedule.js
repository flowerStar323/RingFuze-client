import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import Select from 'react-select'
import { selectThemeColors } from '@utils'

const Schedule = ({ stepper, type }) => {
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      stepper.next()
    }
    event.preventDefault()
  }

  const hours = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' },
      { value: '9', label: '9' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' }
    ]
  const minutes = [
      { value: '00', label: '00' },
      { value: '15', label: '15' },
      { value: '30', label: '30' },
      { value: '45', label: '45' }
    ]
  const periods = [
      { value: 'am', label: 'AM' },
      { value: 'pm', label: 'PM' }
    ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <AvForm onSubmit={onSubmit}>

        {/* // Monday \\ */}

        <hr />
        <h4 className='mt-2'>Monday</h4>
        <h5 className='mt-2'>From:</h5>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>

          <h5 className='mt-2'>To:</h5>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Tuesday \\ */}

        <hr />
        <h4 className='mt-2'>Tuesday</h4>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Wednesday \\ */}

        <hr />
        <h4 className='mt-2'>Wednesday</h4>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Thursday \\ */}

        <hr />
        <h4 className='mt-2'>Thursday</h4>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Friday \\ */}

        <hr />
        <h4 className='mt-2'>Friday</h4>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Saturday \\ */}

        <hr />
        <h4 className='mt-2'>Saturday</h4>
        <Row>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        {/* // Sunday \\ */}

        <hr />
        <h4 className='mt-2'>Sunday</h4>
        <Row className='mb-3'>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-hour-${type}`}>
              Hour
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-hour-${type}`}
              options={hours}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-minute-${type}`}>
              Minutes
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-minute-${type}`}
              options={minutes}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
          <FormGroup tag={Col} md='1'>
            <Label className='form-label mt-1 ml-2' for={`monday-from-period-${type}`}>
              AM/PM
            </Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              id={`monday-from-period-${type}`}
              options={periods}
              className='react-select ml-1'
              classNamePrefix='select'
            />
          </FormGroup>
        </Row>

        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev'>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default Schedule
