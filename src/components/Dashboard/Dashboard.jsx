import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Clock from "../Clock/Clock";

function Dashboard() {
  const [count, setCount] = useState(250);
  const [count1, setCount1] = useState(50);
  const [count2, setCount2] = useState(40);
  const [count3, setCount3] = useState(40);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  function addStudents() {
    setStudents(["Rahul", "Ravi", "Anjali"]);
  }

  function add() {
    setCount((prev) => prev + 1);
  }

  function add1() {
    setCount1((prev) => prev + 1);
  }

  function add2() {
    setCount2((prev) => prev - 1);
  }

  function add3() {
    setCount3((prev) => prev + 1);
  }

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Welcome Back</h1>

      <div className="cards-container">
        {/* Total Students */}
        <div className="card">
          <Clock />
          <h2>{count}</h2>
          <button onClick={add}>Add Students</button>
          <button onClick={() => setCount(250)}>Reset Students</button>
          <p>Total Students</p>
        </div>

        {/* Companies */}
        <div className="card">
          <h2>{count1}</h2>
          <button onClick={add1}>Add Companies</button>
          <p>Companies</p>
        </div>

        {/* Pending */}
        <div className="card">
          <h2>{count2}</h2>
          <button onClick={add2}>Decrease</button>
          <p>Pending</p>
        </div>

        {/* Placed */}
        <div className="card">
          <h2>{count3}</h2>
          <button onClick={add3}>Increase</button>
          <p>Placed</p>
        </div>

        {/* Students Array */}
        <div className="card">
          <button onClick={addStudents}>Load Students</button>
          <h3>Students List</h3>
          {students.map((student, index) => (
            <p key={index}>{student}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
