import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const StudentCard = React.lazy(() => import("../components/StudentCard"));
import Loading from "../components/Loading";

function Data() {
  const [studentData, setStudentData] = useState([]);
  async function getData() {
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
      setStudentData(data.data.allTours);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-10/12 mx-auto my-10 ">
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 ">
            {studentData.map((el) => {
              return <StudentCard key={el._id} data={el} />;
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Data;
