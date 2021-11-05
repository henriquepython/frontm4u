import React, { useState, useEffect } from "react";
import StudentDataService from "../services/StudentDataService";

const Student = props => {
  const initialStudentState = {
    key: null,
    name: "",
    age: 0,
    email: "",
    users: "",
    adresses: "",
  };
  const [message, setMessage] = useState("");
  const [currentStudent, setcurrentStudent] = useState(initialStudentState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(() => {
    getStudent(key);
  }, [props.match.params.id]);

  const getStudent = id => {
    StudentDataService.get(id)
    .then(response => {
      setcurrentStudent(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setcurrentStudent({ ...currentStudent, [name]: value });
  };

  const updateStudent = () => {
    StudentDataService.update(key, currentStudent)
    .then(response => {
      console.log(response);
      setMessage("Student was updated successfully!");
      props.history.push("/studentList");
    })
    .catch(e => {
      console.log(e)
    })
  };

  const deleteStudent = () => {
    if (window.confirm('Do you want to delete?')){
      StudentDataService.remove(currentStudent.key)
      .then(response => {
        setMessage("Student was deleted!")
        props.history.push("/studentList")
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <div>
    {
      currentStudent ? (
        <div className="edit-form">
          <h4>EDIT STUDENT</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentStudent.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  value={currentStudent.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={currentStudent.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="users">User</label>
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  name="user"
                  value={currentStudent.users}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={currentStudent.adresses}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          <button className="btn btn-danger mr-2" onClick={deleteStudent}>
            Delete
          </button>
          <button type="submit" className="btn btn-success" onClick={updateStudent}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Student...</p>
        </div>
      )
    }
    </div>
  );
};
export default Student;