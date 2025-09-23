import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Create from "./Create";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(
        "https://6808c174942707d722df9ba9.mockapi.io/CRUD-Contact-Management-System"
      )
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://6808c174942707d722df9ba9.mockapi.io/CRUD-Contact-Management-System/${id}`
      )
      .then(() => {
        getData();
      });
  }

  function settoLocalStorage(id, name, number, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h1>Contact Details</h1>
        <Link to="/">
          <button className="btn btn-primary">Create Data</button>
        </Link>
      </div>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Ph. Number</th>
            <th scope="col">Email.ID</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (

            <tbody>
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.number}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        settoLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.number,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
