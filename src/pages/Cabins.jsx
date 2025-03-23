import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabins from "../features/cabins/Addcabins";

function Cabins() {
 
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>

      <Row>
        <Heading as="h3">Cabin Table</Heading>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
