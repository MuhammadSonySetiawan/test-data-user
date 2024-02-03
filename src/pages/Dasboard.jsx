import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const { data } = response.data;
      setUserData(data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>

      <div>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
