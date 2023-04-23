import React from 'react';
import schoolsData from '../Utility/schoolData';
import ItemCard from '../Components/ItemCard';
import './Home.css';

const Home = () => {
  const [schoolsList, setSchoolsList] = React.useState([]);

  const getSchools = () => {
    // API call for schools data
    setSchoolsList(schoolsData);
  };

  React.useEffect(() => {
    getSchools();
  }, []);

  return (
    <div className="school-list">
      <h1>Explore Available Universities</h1>
      {schoolsList.map((school, index) => (
        <ItemCard key={index} school={school} />
      ))}
    </div>
  );
};

export default Home;
