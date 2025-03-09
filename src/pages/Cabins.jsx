import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

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
      </Row>
    </>
  );
}

export default Cabins;
