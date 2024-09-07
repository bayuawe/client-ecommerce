import React from "react";

const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <label className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </label>
  );
};

export default FormInput;
