import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>August 28th, 2021</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">232.19</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
