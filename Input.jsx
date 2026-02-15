 import React from "react";

const Input = ({ label, type = "text", value, onChange, placeholder, textarea = false, name }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
        />
      ) : (
        <input
          name={name}
          type={type}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;