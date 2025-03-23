import React, { useState } from 'react'
import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

function AddCabins() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpened(!isModalOpened)}>
        {isModalOpened ? "Hide cabins" : "Add new cabin"}
      </Button>
      {isModalOpened &&
        <Modal onClose={() => setIsModalOpened(false)}>
          <CreateCabinForm onCloseModal={() => setIsModalOpened(false)} />
        </Modal>}
    </>
  )
}

export default AddCabins