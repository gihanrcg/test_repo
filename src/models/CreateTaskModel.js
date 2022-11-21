import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTaskModel = ({modal, toggle, save}) => {
     const [taskName, setTaskName] = useState('');
     const [description, setDescription] = useState('');

    const handleChange = (e) => {
         const {name, value } = e.target

         if (name === 'taskName') {
             setTaskName(value)
         }else{
             setDescription(value)
         }
    }
    
    const handleSave = () => {
         let taskObj = {}
         taskObj['Name'] = taskName
         taskObj['Description'] = description
         const current = new Date();
         const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
         taskObj['Date'] = date
         taskObj['Status'] = 1
         save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label >Task Name</label>
                        <input type='text' className='form-control' name='taskName' value={taskName} onChange = {handleChange}/>
                    </div>
                    <div className='form-group pt-3'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control' name='description' value={description} onChange = {handleChange}></textarea>
                    </div>
                    
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type='submit' onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );

    
};

export default CreateTaskModel;