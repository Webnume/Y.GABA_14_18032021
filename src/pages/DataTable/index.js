import React, { useEffect, useState, useMemo } from "react";
// import Header from "../../components/DataTable/Header";
import { TableHeader, Pagination, Search } from "../../components/DataTable";
// import useFullPageLoader from "../../hooks/useFullPageLoader";

const DataTable = () => {
  const [comments, setComments] = useState([]);
  //   const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  
  const [itemsPerPage, setItemPerPage]=useState(10);
  const ITEMS_PER_PAGE = itemsPerPage;

  const headers = [
    { name: "First Name", field: "first-name", sortable: true },
    { name: "Last Name", field: "last-name", sortable: true },
    { name: "Start Date", field: "start-date", sortable: true },
    { name: "Department", field: "department", sortable: true },
    { name: "Date of Birth", field: "date-of-birth", sortable: true },
    { name: "Street", field: "street", sortable: true },
    { name: "City", field: "city", sortable: true },
    { name: "State", field: "state", sortable: true },
    { name: "Zip Code", field: "zip-code", sortable: true },
  ];

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    // showLoader();
    setComments(employees);
    // hideLoader();
    // console.log(employees);
  }, []);

  // useEffect(() => {
  //     const getData = () => {
  //         showLoader();

  //         fetch("https://jsonplaceholder.typicode.com/comments")
  //             .then(response => response.json())
  //             .then(json => {
  //                 hideLoader();
  //                 setComments(json);
  //                 console.log(json);
  //             });
  //     };

  //     getData();
  // }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;
    // console.log(computedComments);

    if (search) {
      computedComments = computedComments.filter(
        (comment) =>
          comment['first-name'].toLowerCase().includes(search.toLowerCase()) ||
          comment['last-name'].toLowerCase().includes(search.toLowerCase())||
          comment['start-date'].toLowerCase().includes(search.toLowerCase())||
          comment['department'].toLowerCase().includes(search.toLowerCase())||
          comment['date-of-birth'].toLowerCase().includes(search.toLowerCase())||
          comment['street'].toLowerCase().includes(search.toLowerCase())||
          comment['city'].toLowerCase().includes(search.toLowerCase())||
          comment['state'].toLowerCase().includes(search.toLowerCase())||
          comment['zip-code'].toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedComments.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search, sorting]);

  return (
    <>
      {/* <Header title="Building a data table in react" /> */}

      <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <div className="col-md-6 d-flex flex-row-reverse">
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
          </div>
          <table className="table table-striped">
            <TableHeader
              headers={headers}
              onSorting={(field, order) => setSorting({ field, order })}
            />
            <tbody>
              {commentsData.map((comment, index) => (
                  
                <tr key={index}>
                  {/* <th scope="row" key={comment["first-name"]}>
                  {comment["first-name"]}
                  </th> */}
                  <td>{comment["first-name"]}</td>
                  <td>{comment["last-name"]}</td>
                  <td>{comment["start-date"]}</td>
                  <td>{comment["department"]}</td>
                  <td>{comment["date-of-birth"]}</td>
                  <td>{comment["street"]}</td>
                  <td>{comment["city"]}</td>
                  <td>{comment["state"]}</td>
                  <td>{comment["zip-code"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-6">
              <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {loader} */}
    </>
  );
};

export default DataTable;
