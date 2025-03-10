import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showCabin, setShowCabin] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>

      <Row>
        <Heading as="h3">Cabin Table</Heading>
        <CabinTable />
        <Button onClick={() => setShowCabin(!showCabin)}>
          {showCabin ? "Hide cabins" : "Add new cabin"}
        </Button>
        {showCabin && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
