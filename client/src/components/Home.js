import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {

  const navigate = useNavigate();
  const [ petList, setPetList ] =useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log(res.data);
        setPetList(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  },[]);

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between">
        <p className="h1">Pet Shelter</p>
        <Link to="/pet/create">Add a Pet to the Shelter</Link>
      </div>
      <p className="h2 text-primary">These pets are looking for a good home</p>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {petList.map((onePet, index) => {
            return (
              <tr key={ index }>
                <td>{ onePet.name }</td>
                <td>{ onePet.type }</td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-link" onClick={ () => navigate(`/pet/view/${ onePet._id }`) }>
                      Details
                    </button>
                    <button className="btn btn-link" onClick={ () => navigate(`/pet/edit/${ onePet._id }`) }>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

export default Home;