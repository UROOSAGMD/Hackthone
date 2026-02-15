 import React, { useState } from "react";

const ColorPicker = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="mb-3">
      <label className="form-label">Choose Color</label>
      <div
        style={{
          width: "50px",
          height: "50px", // Larger for circle
          borderRadius: "50%", // Circle shape
          backgroundColor: value,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default ColorPicker;