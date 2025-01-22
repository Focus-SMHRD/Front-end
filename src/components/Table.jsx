import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import { useEffect, useRef, useState } from 'react';

const Table = ({data, option, th}) => {
  const tableRef = useRef(null);
  const dataTableInstance = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const initTable = () => {
      if (tableRef.current && !dataTableInstance.current) {
        try {
          dataTableInstance.current = new DataTable(tableRef.current, {
            searchable: false,
            perPageSelect: false,
            perPage: 15,
            labels: {
              placeholder: "검색...",
              perPage: "{select} 개씩 보기",
              noRows: "데이터가 없습니다.",
            },
            layout: {
              top: "",
            },
          });

          // 초기 필터 적용
          if (selectedFilter) {
            dataTableInstance.current.search(selectedFilter);
          }
        } catch (error) {
          console.error("Error initializing DataTable:", error);
        }
      }
    };

    // 페이지 로드 상태 확인 후 테이블 초기화
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
  }, [selectedFilter]);

  // 드롭다운 값 변경 핸들러
  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    setSelectedFilter(newValue);

    // 데이터 테이블이 초기화된 경우에만 필터 적용
    if (dataTableInstance.current) {
      dataTableInstance.current.search(newValue);
    } else {
      console.warn("Table is not initialized yet.");
    }
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
          {option.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}

        </select>
        </div>
        <div className="card-body">
            <table ref={tableRef}>
            <thead>
                {th && Array.isArray(th) && th.length > 0 ? (
                  <tr>
                    {th.map((item, index) => (
                      <th key={index} className="tableCenter">{item}</th>
                    ))}
                  </tr>
                ) : (
                  <tr>
                    <th>No Data</th>
                  </tr>
                )}
              </thead>
              <tfoot>
                {th && Array.isArray(th) && th.length > 0 ? (
                  <tr>
                    {th.map((item, index) => (
                      <th key={index} className="tableCenter">{item}</th>
                    ))}
                  </tr>
                ) : (
                  <tr>
                    <th>No Data</th>
                  </tr>
                )}
              </tfoot>
                <tbody>
                {th && Array.isArray(th) && th.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={index} className="tableCenter">
                        <td>{index + 1}</td>
                        <td>{item.op_name}</td>
                        <td>{item.observed_at}</td>
                        <td>{item.water_temp}</td>
                        <td>
                          <div className="badge bg-warning rounded-pill">Normal</div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">데이터가 없습니다.</td>
                    </tr>
                  )}

                  
                    {/* <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                        <td><div className="badge bg-warning rounded-pill">Pending</div></td>
                    </tr>
                    <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td>$86,000</td>
                        <td><div className="badge bg-secondary text-white rounded-pill">Part-time</div></td>
                    </tr>
                    <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td>$433,060</td>
                        <td><div className="badge bg-info rounded-pill">Contract</div></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
       </>

    );
}
export default Table;