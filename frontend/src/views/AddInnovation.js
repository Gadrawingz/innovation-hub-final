import React from "react";
import Axios from 'axios';
// import { Link } from "react-router-dom";


const submitInnovation = () => {
  Axios.post("http://localhost:4050/api/insert", {
    //innovation_name: innovation_name,
    //innovation_category: innovation_category,
    //innovationfile: innovationfile,
  }).then(() => {
    console.log("SUCCESS!");
  });
};

const AddInnovation = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Add new innovation</h2>
        </div>
      </div>
      <br />
      <br />

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Innovation Name</label>
              <input
                className="input"
                type="text"
                name="innovation_name"
                placeholder="Innovation name"
              />
            </div>
            <div className="field">
              <label className="label">Innovation Category</label>
              <input
                className="input"
                type="text"
                name="innovation_category"
                placeholder="Innovation category"
              />
            </div>
            <div className="field">
              <label className="label">Innovation Image</label>
              <input className="input" type="file" name="innovationfile" />
            </div>
            <br />

            <div className="field is-clearfix">
              <button
                className="button is-link is-pulled-left"
                onClick={submitInnovation}
              >
                Upload 
              </button>
              <button
                className="button is-danger is-outlined is-pulled-right"
                type="reset"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInnovation;
