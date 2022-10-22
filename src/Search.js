import React from "react";
import './App.css';

export default function Search() {
    return (
        <div className="search">
          <div className="border-shadow">
            <form>
              <div className="row m-3 border=rounded">
                <div className="col-9">
                  <input
                    type="text"
                    placeholder="type a city..."
                    className="form-control"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}
