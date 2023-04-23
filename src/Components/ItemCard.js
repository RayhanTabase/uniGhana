import React from "react";
import "./ItemCard.css";

const ItemCard = ({ school }) => {
  return (
    <div className="card-container">
      <div className="school-image">
        <img src={school.image} alt={school.name} />
      </div>
      <div className="school-details">
        <h2>{school.name}</h2>
        <p className="established">Year Established: {school.year_established}</p>
        <div className="faculties">
          {school.faculties.map((faculty, index) => (
            <div key={index} className="faculty">
              <h3>{faculty.name}</h3>
              <ul>
                {faculty.departments.map((department, index) => (
                  <li key={index}>{department}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
