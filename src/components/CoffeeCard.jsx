import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, quantity, price, name } = coffee;

  const handleDelete = (_id) => {
    console.log("deleted", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start delete the coffee

        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter(cof=>cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 border-2 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Quantity:{quantity}</p>
          <p>Price:{price}</p>
          <div className="card-actions justify-end">
            <div className="join space-y-2 join-vertical">
              <Link to={`/coffee/${_id}`}><button className="btn join-item">details</button></Link>
              <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
