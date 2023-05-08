import React from "react";
import "./Invoices.scss";
const Invoices = () => {
  return (
    <div className="invoices">
      <h2 className="heading">Invoices</h2>
      <p className="para">
        Proforma invoice and Invoice are sent to the client on your behalf
        automatically
      </p>
      <div className="box">
        <div className="labels">
          <span className="label">Items</span>
          <span className="label">Proforma invoice</span>
          <span className="label">Proforma invoice Date</span>
          <span className="label">Status</span>
          <span className="label">Invoice </span>
          <span className="label">Invoice date </span>
        </div>
        <div className="paras">
          <p className="para">Moodboard design, month 1 retainer costs</p>
          <p className="link">MFPI-12345678</p>
          <p className="para desc">12 April 2023</p>
          <button className="btn btn-gray">Payment pending</button>
          <p className="link"></p>
          <p className="para"></p>
        </div>
        <div className="paras">
          <p className="para">Moodboard design, month 1 retainer costs</p>
          <p className="link">MFPI-12345678</p>
          <p className="para desc">12 April 2023</p>
          <button className="btn btn-green">Payment collected</button>
          <p className="link">MFIN-12345678</p>
          <p className="para">27 March 2023</p>
        </div>
        <p className="info">
          Understand the meaning of status and how the payments work.{" "}
          <span className="link">Click here</span>
        </p>
      </div>
    </div>
  );
};

export default Invoices;
