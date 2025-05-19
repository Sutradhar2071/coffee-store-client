import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const {_id, name, taste, supplier, quantity, photo, price, details } =
    useLoaderData();

  const handleDelete = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee)
    // send updated coffee to the db

    fetch(`http://localhost:3000/coffees/${_id}`,{
      method: "PUT",
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(updateCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Coffee updated successfully",
  showConfirmButton: false,
  timer: 1500
});

      }
    })
  };

  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-3.5">
          <h1 className="text-6xl">Update Coffee</h1>
        </div>
        <form onSubmit={handleDelete}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Name"
                defaultValue={name}
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Quantity"
                defaultValue={quantity}
                name="quantity"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={supplier}
                placeholder="Supplier"
                name="supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                defaultValue={taste}
                className="input w-full"
                placeholder="Taste Coffee"
                name="taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                defaultValue={price}
                name="price"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                defaultValue={details}
                placeholder="coffee details"
                name="details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              defaultValue={photo}
              name="photo"
            />
          </fieldset>

          <input type="submit" className="btn w-full" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
