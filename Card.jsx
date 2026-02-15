 import React from "react";
import { Link } from "react-router-dom";

const Card = ({ resume }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{resume.name}</h5>
        <p className="card-text">{resume.summary?.substring(0, 80)}...</p>
        <Link to={`/preview/${resume.id}`} className="btn btn-sm btn-info me-2">Preview</Link>
        <Link to={`/edit/${resume.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
      </div>
    </div>
  );
};

export default Card;