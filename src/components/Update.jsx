import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const Navigate = useNavigate();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [number, setNum] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setNum(localStorage.getItem("number"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://6808c174942707d722df9ba9.mockapi.io/CRUD-Contact-Management-System/${id}`,
        { name: name, number: number, email: email }
      )
      .then(() => {
        Navigate("/read");
      });
  };

  return (
    <div>
      <div>
        <h1>Update</h1>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            value={number}
            onChange={(e) => setNum(e.target.value)}
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button className="btn btn-primary" onClick={(e) => handleUpdate(e)}>
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
