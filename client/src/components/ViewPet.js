import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';

const ViewPet = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [ singlePet, setSinglePet ] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${ id }`)
      .then((res) => {
        console.log(res.data);
        setSinglePet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/pets/${ id }`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between">
        <p className="h1">Pet Shelter</p>
        <Link to="/">Back To Home</Link>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="h2 text-primary">Details About { singlePet.name }</p>
        <button className="btn btn-danger" onClick={ deleteHandler }><i className="bi bi-house-door"></i> Adopt { singlePet.name }</button>
      </div>
      <div className="border p-3 mt-3">
        <table className="table">
          <tr>
            <th className="fw-bold">Pet Type:</th>
            <td>{ singlePet.type }</td>
          </tr>
          <tr>
            <th className="fw-bold">Description:</th>
            <td>{ singlePet.description }</td>
          </tr>
          <tr>
            <th className="fw-bold">Skills:</th>
            <td>{ singlePet.skill1 }<br/>{ singlePet.skill2 }<br/>{ singlePet.skill3 }</td>
          </tr>
        </table>
      </div>

    </div>

  );

};

export default ViewPet;