import React from "react";
import './Transer.css'
import {
  Search,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  CreditCard,
  Bell,
} from "lucide-react";

function Transfer() {
  const transactions = [
    {
      type: "Sent",
      name: "Ali Raza",
      amount: "-$120.00",
      status: "Completed",
      date: "15 May 2024",
    },
    {
      type: "Received",
      name: "Sara Khan",
      amount: "+$250.00",
      status: "Completed",
      date: "15 May 2024",
    },
    {
      type: "Deposit",
      name: "Credit Card",
      amount: "+$500.00",
      status: "Completed",
      date: "14 May 2024",
    },
    {
      type: "Withdraw",
      name: "Meezan Bank",
      amount: "-$300.00",
      status: "Pending",
      date: "14 May 2024",
    },
  ];

  return (
    <div className="transfer-container">
      {/* Header */}
      <div className="transfer-header">
        <div>
          <h1>Transactions</h1>
          <p>Track all your financial activity</p>
        </div>

        <div className="header-right">
          <Bell className="bell-icon" />

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="cards-grid">
        <Card title="Balance" value="$4,562" icon={<Wallet />} />
        <Card title="Received" value="$12,650" icon={<ArrowDownLeft />} />
        <Card title="Sent" value="$8,430" icon={<ArrowUpRight />} />
        <Card title="Transactions" value="156" icon={<CreditCard />} />
      </div>

      {/* Search */}
      <div className="search-section">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search transactions..." />
        </div>

        <select>
          <option>All</option>
          <option>Sent</option>
          <option>Received</option>
          <option>Deposit</option>
          <option>Withdraw</option>
        </select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td
                  className={
                    item.amount.includes("-")
                      ? "amount-negative"
                      : "amount-positive"
                  }
                >
                  {item.amount}
                </td>

                <td>
                  <span
                    className={
                      item.status === "Completed"
                        ? "status-completed"
                        : "status-pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="card">
      <div>
        <p className="card-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div className="card-icon">{icon}</div>
    </div>
  );
}

export default Transfer;