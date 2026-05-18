import React, { useState } from 'react';
import './Admin.css';
import Header from './UserLayout/Header';

function Add() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    nationality: "",
    dateOfBirth: "",
    gender: ""
  });
  const [admin, setAdmin] = useState([]);

  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  function handleUpdateAdmin(item) {
    setSelectedAdmin(item);
    setIsUpdating(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.password ||
      !data.nationality ||
      !data.dateOfBirth ||
      !data.gender
    ) {
      alert("All Fields Are Required");
      return;
    }

    const newAdmin = {
      id: admin.length + 1,
      ...data,
      action: "Admin"
    };

    setAdmin([...admin, newAdmin]);

    setData({
      name: "",
      email: "",
      password: "",
      phone: "",
      nationality: "",
      dateOfBirth: "",
      gender: ""
    });
  }

  return (
    <>
      <div className="add-container">

        <h2>Add Admin</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Admin FullName :</label>

            <input
              type="text"
              placeholder="Full_Name*"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Admin Email :</label>

            <input
              type="email"
              placeholder="Email*"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Phone Number :</label>

            <input
              type="number"
              placeholder="Phone_Number*"
              value={data.phone}
              onChange={(e) =>
                setData({ ...data, phone: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Password :</label>

            <input
              type="password"
              placeholder="Password*"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Date Of Birth :</label>

            <input
              type="date"
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({ ...data, dateOfBirth: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Nationality :</label>

            <select
              value={data.nationality}
              onChange={(e) =>
                setData({ ...data, nationality: e.target.value })
              }
            >
              <option value="">Select Country</option>
              <option value="Lebanon">Lebanon</option>
              <option value="France">France</option>
              <option value="Iraq">Iraq</option>
            </select>
          </div>

          <div className="form-group gender-group">

            <label>Gender :</label>

            <div className="gender-box">

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={data.gender === "Male"}
                  onChange={(e) =>
                    setData({ ...data, gender: e.target.value })
                  }
                />
                <span>Male</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={data.gender === "Female"}
                  onChange={(e) =>
                    setData({ ...data, gender: e.target.value })
                  }
                />
                <span>Female</span>
              </div>

            </div>

          </div>

          <button className="submit-btn">
            Add Admin
          </button>

        </form>

      </div>


      <table className="admin-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Action</th>
            <th>Update</th>
          </tr>

        </thead>

        <tbody>

          {admin.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.nationality}</td>
              <td>{item.gender}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.action}</td>

              <td>
                <button
                  onClick={() => handleUpdateAdmin(item)}
                  className='btnAdd'
                >
                  Update
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* UPDATE FORM */}

      {selectedAdmin && isUpdating && (

        <div className='update-form'>

          <h3>Update Admin</h3>

          <input
            type="text"
            value={selectedAdmin.name}
            onChange={(e) =>
              setSelectedAdmin({
                ...selectedAdmin,
                name: e.target.value
              })
            }
          />

          <input
            type="email"
            value={selectedAdmin.email}
            onChange={(e) =>
              setSelectedAdmin({
                ...selectedAdmin,
                email: e.target.value
              })
            }
          />

          <input
            type="text"
            value={selectedAdmin.phone}
            onChange={(e) =>
              setSelectedAdmin({
                ...selectedAdmin,
                phone: e.target.value
              })
            }
          />

          <button
            className='btnAdd3'
            onClick={() => {

              const updatedAdmins = admin.map((item) =>
                item.id === selectedAdmin.id
                  ? selectedAdmin
                  : item
              );

              setAdmin(updatedAdmins);

              setIsUpdating(false);
              setSelectedAdmin(null);
            }}
          >
            Save
          </button>

          <button
            className='btnAdd3'
            onClick={() => {
              setIsUpdating(false);
              setSelectedAdmin(null);
            }}
          >
            Cancel
          </button>

        </div>

      )}

    </>
  );
}

export default Add;