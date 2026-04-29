import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function DataTable() {
  const [stdData, setStdData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "http://192.168.100.170:4000/api/v1/students",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setStdData(data.data.allTours);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteStd = async (id) => {
    try {
      const res = await fetch("http://192.168.100.170:4000/api/v1/students", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      getData();
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-screen max-w-10/12 mx-auto my-10 ">
        <table className=" w-full bordertext-lg">
          <thead className="border">
            <tr>
              <th className="border py-6">Name</th>
              <th className="border py-6">Regno </th>
              <th className="border py-6">Age </th>
              <th className="border py-6">Program </th>
              <th colSpan={2} className="border py-6 ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody className="border text-center text-lg">
            {stdData.map((el) => {
              return (
                <tr className="" key={el._id}>
                  <td className="border py-4">{el.name}</td>
                  <td className="border">{el.regno}</td>
                  <td className="border">{el.age}</td>
                  <td className="border">{el.program}</td>
                  <td className="border">
                    <button
                      onClick={() => deleteStd(el._id)}
                      className="cursor-pointer hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border">
                    <button className="cursor-pointer hover:bg-blue-500">
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
