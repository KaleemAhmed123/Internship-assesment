import React from "react";
import PaymentsNotes from "../../components/paymentsNotes/PaymentsNotes";
import Invoices from "../../components/invoices/Invoices";

const Payments = () => {
  return (
    <div>
      <PaymentsNotes />
      <Invoices />
    </div>
  );
};

export default Payments;
