import React from "react";

const AddCoffee = () => {

    const handleAddCoffeeButton = e =>{
        e.preventDefault();
        const form = e.target;
        console.log(form)
    }

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-3.5">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffeeButton}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Quantity"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
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
              name="price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="coffee details"
              name="details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="My awesome page"
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
