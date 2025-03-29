// import React, { useState } from 'react'
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabins() {
//   const [isModalOpened, setIsModalOpened] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsModalOpened(!isModalOpened)}>
//         {isModalOpened ? "Hide cabins" : "Add new cabin"}
//       </Button>
//       {isModalOpened &&
//         <Modal onClose={() => setIsModalOpened(false)}>
//           <CreateCabinForm onCloseModal={() => setIsModalOpened(false)} />
//         </Modal>}
//     </>
//   )
// }

export default AddCabins;
