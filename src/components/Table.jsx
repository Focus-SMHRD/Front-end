import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import { useEffect, useRef, useState } from 'react';

function Table(){
    const tableRef = useRef(null);
    const dataTableInstance = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState("");

    useEffect(() => {
      const initTable = () => {
        if (tableRef.current && !dataTableInstance.current) {
          dataTableInstance.current = new DataTable(tableRef.current, {
            searchable : false,
            perPageSelect : false,
            perPage : 15,
            labels : {
                
            },
            layout: {
                top: "",
              }
          });
        }
      };
  
      if (document.readyState === "complete") {
        initTable();
      } else {
        window.addEventListener("load", initTable);
      }
  
      return () => {
        window.removeEventListener("load", initTable);
        if (dataTableInstance.current) {
          dataTableInstance.current.destroy();
          dataTableInstance.current = null;
        }
      };
    }, []);

      // 드롭다운 값 변경 핸들러
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    // 데이터 테이블 필터링 기능 적용
    dataTableInstance.current.search(event.target.value);
  };

  
    return(
        <> 
          
        <div className="new-top">
        <select
          id="filterSelect"
          className="form-select w-auto"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="System Architect">System Architect</option>
          <option value="Project Manager">Project Manager</option>
        </select>
        </div>
        <div className="card-body">
            <table ref={tableRef}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td><div className="badge bg-primary text-white rounded-pill">Full-time</div></td>
                        <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark me-2"><i data-feather="more-vertical"></i></button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark"><i data-feather="trash-2"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                        <td><div className="badge bg-warning rounded-pill">Pending</div></td>
                        <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark me-2"><i data-feather="more-vertical"></i></button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark"><i data-feather="trash-2"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                        <td><div className="badge bg-secondary text-white rounded-pill">Part-time</div></td>
                        <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark me-2"><i data-feather="more-vertical"></i></button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark"><i data-feather="trash-2"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                        <td><div className="badge bg-info rounded-pill">Contract</div></td>
                        <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark me-2"><i data-feather="more-vertical"></i></button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark"><i data-feather="trash-2"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       </>

    );
}
export default Table;