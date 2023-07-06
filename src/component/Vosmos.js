import React from "react";
import myImage from "../logoo.jpeg";
import Imag from "../imgg.jpeg";
import "./Vosmos.css";
import { Link } from "react-router-dom";

function Vosmos() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-9 g-4">
            <img src={myImage} alt="logo" width="100"></img>
            <h6 className="word">The unified world of tommorrow</h6>
          </div>
          <div className="col-3 g-4">
            <Link className="btn btn-primary but1" to="/Signup">
              sign up
            </Link>
            <Link className="btn btn-secondary but1" to="/signin">
              login
            </Link>
          </div>
        </div>
      </div>
      <div className="container mb-4 div1 ">
        <div className="text-center">
          <h1 className="m-2 w1">Give your business a</h1>
          <h1 className="m-2 w2">virtual address</h1>
          <h6 className="mt-4 w3">
            Reach out to customer 24/7 to metaverse platforms that connect
            brands to
          </h6>
          <h6 className="mb-4 w4">
            customers and people to experience.immensive,engaging and easily
            accessible{" "}
          </h6>
          <a className="btn btn-secondary btn-lg but2 mb-4" href="#">
            create store
          </a>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center ">
          <div className="col-12">
            <h5 className="ml-3">Popular Stores</h5>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Design store</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Aisle</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Quirkly close</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Urban Square</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Quick Mart</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5 className="ml-3">Trending Stores</h5>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Quick Mart</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Design store</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Boutique</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">The Aisle</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img src={Imag} className="card-img-top" alt="img 1" />
              <div className="card-body">
                <h5 className="card-title">Quirkly Closet</h5>
                <div>
                  <a href="#">view</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vosmos;