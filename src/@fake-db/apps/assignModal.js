import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge, Label, FormGroup } from 'reactstrap';
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { useDispatch } from 'react-redux'
import { fetchUsersByPayload } from '../../redux/actions/user'
import "./style.css";
import { FETCH_USERS_BY_PAYLOAD_SUCCESS } from '../../redux/constants/user'
import { updateNumber, fetchNumbers } from "../../redux/actions/numbers";
import { Redirect } from 'react-router-dom';

const AssignModal = ({ row }) => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false);
    const [rowid, setrowid] = useState("");
    const [pubdata, setpubdata] = useState("");
    const [publishers, setPublishers] = useState([])

    const toggle = () => setModal(!modal);
    const onChangeInput = (e) => {
        setpubdata(e.target.value);
    }
    useEffect(() => {
        if (open) {
            async function fetchData() {
                const result = await dispatch(fetchUsersByPayload({
                    role: 'publisher'
                }))

                if (result.type === FETCH_USERS_BY_PAYLOAD_SUCCESS) {
                    setPublishers(result.payload.data)
                    setrowid(row._id);
                }
            }

            fetchData()
        }
    }, [open])
    const onSubmit = async () => {
        var publisher = [];
        publisher.push(pubdata);
        await dispatch(updateNumber(rowid, { publisher, status: "Active" }));
        await dispatch(fetchNumbers())
        // location.href = "/numbers/view";
        await toggle();

    }
    return (
        <div>
            <div onClick={toggle}>
                <Badge color='light-secondary' pill>
                    {row.status}
                </Badge>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Assign Publisher</ModalHeader>
                <ModalBody>
                    <AvForm>
                        <FormGroup>
                            <Label for='publisher'>Select Publisher</Label>
                            <AvInput type='select' id='publisher' name='publisher' onChange={onChangeInput} required>
                                <option value=''>Select Publisher</option>
                                {publishers?.map((item) => {
                                    return (
                                        <option key={item._id} value={item._id}>{item.username}</option>
                                    )
                                })}
                            </AvInput>
                        </FormGroup>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AssignModal;