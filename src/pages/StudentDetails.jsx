import { useParams } from "react-router-dom"
function StudentDetails(){
    const {id,studentName} = useParams();
    return(
        <div>
            <h1>Student Details</h1>
            <hr/>
            <h2>Student Id: {id}</h2>
            <p>Name: {studentName}</p>
        </div>
    )
};
export default StudentDetails;