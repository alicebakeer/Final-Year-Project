import React from "react";
import "./Recieve.css";
import {
  ArrowDownLeft,
  Copy,
  QrCode,
  CreditCard,
} from "lucide-react";

function Receive() {
  const walletAddress = "0xA2D4F6B7C9E123456789ABCDEF";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Address copied!");
  };

  const shareAddress = () => {
    alert("Share functionality coming soon!");
  };

  return (
    <div className="receive-container">

      <div className="receive-header">
        <div>
          <h1>Receive Money</h1>
          <p>Receive payments securely into your wallet</p>
        </div>

        <div className="receive-icon">
          <ArrowDownLeft size={28} />
        </div>
      </div>

      <div className="receive-card">

        <div className="left-section">

          <div className="wallet-box">
            <h3>Wallet Address</h3>

            <div className="address-box">
              <p>{walletAddress}</p>

              <button onClick={copyAddress}>
                <Copy size={18} />
              </button>
            </div>
          </div>

          <div className="bank-card">
            <div className="card-top">
              <CreditCard size={28} />
              <span>VISA</span>
            </div>

            <h2>**** **** **** 4589</h2>

            <div className="card-bottom">
              <div>
                <p>Card Holder</p>
                <h4>Alice Bakeer</h4>
              </div>

              <div>
                <p>Expires</p>
                <h4>12/28</h4>
              </div>
            </div>
          </div>

        </div>
        <div className="right-section">

          <div className="qr-box">
            <QrCode size={180} />
          </div>

          <h3>Scan QR Code</h3>

          <p>
            Share this QR code to receive crypto or wallet payments instantly.
          </p>

          <button
            className="share-btn"
            onClick={shareAddress}
          >
            Share Address
          </button>

        </div>

      </div>

    </div>
  );
}

export default Receive;