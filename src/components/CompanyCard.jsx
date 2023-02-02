import React, { useState, useEffect } from "react";
import axios from "axios";

const CompanyCard = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleViewDetails = (id) => {
    setSelectedUser(id);
  };

  return (
    <div className="card-container">
      {data.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-header">
            <h3>{user.name}</h3>
            <button onClick={() => handleViewDetails(user.id)}>
              View Details
            </button>
          </div>
          <div className="card-body">
            <p>
              <b>Username:</b> {user.username}
            </p>
            {selectedUser === user.id && (
              <div className="card-details">
                <p>
                  <b>Email:</b> {user.email}
                </p>
                <p> <b>Address:</b>
                  <ul>
                    <li>
                      <b>Street:</b> {user.address.street}
                    </li>
                    <li>
                      <b>Suite:</b> {user.address.suite}
                    </li>
                    <li>
                      <b>City:</b> {user.address.city}
                    </li>
                    <li>
                      <b>Zipcode:</b> {user.address.zipcode}
                    </li>
                    <li> <b>Geo:</b>
                      <ul>
                        <li>
                          <b>Latitude:</b> {user.address.geo.lat}
                        </li> 
                        <li>
                          <b>Longitude:</b> {user.address.geo.lng}
                        </li> 
                      </ul>
                    </li>
                  </ul>
                </p>
                <p>
                  <b>Phone:</b> {user.phone}
                </p>
                <p>
                  <b>Website:</b> {user.website}
                </p>
                <p> <b>Company:</b>
                  <ul>
                    <li>
                      <b>Name:</b> {user.company.name}
                    </li>
                    <li>
                      <b>Catch Phrase:</b> {user.company.catchPhrase}
                    </li>
                    <li>
                      <b>Bs:</b> {user.company.bs}
                    </li>
                  </ul>
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCard;