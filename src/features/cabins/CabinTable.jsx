import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  // console.log("CabinTable", cabins);

  const [URLsearchParams] = useSearchParams();

  //*1)Filter cabins based on the URL search params

  let filteredCabins;
  const filterValue = URLsearchParams.get("discount") || "all";

  if (filterValue === "all") filteredCabins = cabins;

  if (filterValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  if (isLoading) return <Spinner />;

  if (error) throw new Error(error);

  //*2) SORT cabins based on the URL search params

  const sortBy = URLsearchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  /*const sortedCabins = [...filteredCabins].sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    return direction === "asc" ? valueA - valueB : valueB - valueA;
  });
  */

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
        {/* {cabins.map((cabin) => {
        return <CabinRow key={cabin.id} cabin={cabin} />;
        })} */}
      </Table>
    </Menus>
  );
}

export default CabinTable;
