import React from "react";
import "./PaymentsNotes.scss";
const PaymentsNotes = () => {
  return (
    <div className="notes">
      <h2 className="heading-one">Payments and Disbursement Notes</h2>
      <div className="box">
        <div className="first">
          <span className="label">Payment date</span>
          <p className="para">27 March 2023</p>
        </div>
        <div className="first">
          <span className="label">Ammount</span>
          <p className="para">INR 12,345</p>
        </div>
        <div className="first">
          <span className="label">Items</span>
          <p className="para desc">Moodboard design, month 1 retainer costs </p>
        </div>
        <div className="first">
          <span className="label">Disbursement report (click to see)</span>
          <p className="link">MFDN-12345678</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsNotes;
