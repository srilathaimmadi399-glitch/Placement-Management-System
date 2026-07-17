import { Link } from "react-router-dom";

function Student(){
  
  return (
    <>
      <h2>Registered Students</h2>

      {students.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
                <td>
                  <Link to={`/student/${student.id}`}>View</Link>
                  <button onClick={()=>deleteStudent(student.name)}></button>
                  <Link to={`/students/edit/${student.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Student;