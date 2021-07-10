import React, { useState, useEffect } from "react";

const useEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1> Product Discovery </h1>{" "}
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.image}
                        className="rounded"
                        width="155"
                        alt="pd-img"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{curElem.title}</h4>
                      <span className="textLeft"> {curElem.title} </span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Price </span>
                          <span className="number1"> {curElem.price} </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers"> Category </span>
                          <span className="number2"> {curElem.category} </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating"> Rating </span>
                          <span className="number3"> 789 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default useEffectAPI;
