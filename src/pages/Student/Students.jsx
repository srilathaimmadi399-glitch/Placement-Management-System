import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(savedStudents);
  }, []);

  return (
    <div className="student-container">
      <div className="student-header">
        <div>
          <h1>Student Management</h1>
          <p>Manage all registered students here</p>
        </div>

        <Link to="/register">
          <button className="add-btn">+ Add New Student</button>
        </Link>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No students registered.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Students;