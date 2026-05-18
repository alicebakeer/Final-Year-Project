import React from "react";
import "./Wallet.css";
import {
  Search,
  Bell,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

function WalletPage() {
  return (
    <div className="wallet-container">
 <div className="header">
        <div>
          <h1>Wallet</h1>
          <p>Manage your crypto assets</p>
        </div>

        <div className="header-right">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search crypto..." />
          </div>

          <Bell className="bell" />

          <img
            src="https://i.pravatar.cc/45"
            alt="profile"
            className="profile"
          />
        </div>
      </div>

      {/* Top Cards */}
      <div className="top-cards">
        <div className="banner-card">
          <div>
            <h3>Swap 500+ Market Pairs</h3>
            <p>Zero fees and instant exchange</p>
            <button>Exchange Now</button>
          </div>
        </div>

        <div className="banner-card second">
          <div>
            <h3>Earn up to 15%</h3>
            <p>Start farming crypto rewards</p>
            <button>Start Earning</button>
          </div>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="wallet-grid">
        {/* Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p>Wallet Balance</p>
              <h2>€ 3,433.35</h2>
            </div>

            <div className="chart-buttons">
              <button className="active-btn">1D</button>
              <button>7D</button>
              <button>1M</button>
              <button>1Y</button>
            </div>
          </div>

          <div className="fake-chart">
            <div className="line"></div>
          </div>
        </div>

        {/* Circle Wallet */}
        <div className="circle-card">
          <div className="circle">
            <div className="circle-inner">
              <p>My Wallet</p>
              <h2>€12,433</h2>
            </div>
          </div>

          <div className="coins">
            <div className="coin">
              <span>Bitcoin</span>
              <div className="bar pink"></div>
              <span>24%</span>
            </div>

            <div className="coin">
              <span>Ethereum</span>
              <div className="bar blue"></div>
              <span>18%</span>
            </div>

            <div className="coin">
              <span>Solana</span>
              <div className="bar purple"></div>
              <span>32%</span>
            </div>

            <div className="coin">
              <span>Binance</span>
              <div className="bar yellow"></div>
              <span>22%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wallets */}
      <div className="bottom-section">
        <div className="wallet-card">
          <div className="wallet-icon">
            <Wallet />
          </div>

          <div>
            <h3>Bitcoin Wallet</h3>
            <p>0.543 BTC</p>
          </div>

          <div className="wallet-price">
            <ArrowUpRight size={18} />
            <span>$13,200</span>
          </div>
        </div>

        <div className="wallet-card">
          <div className="wallet-icon">
            <Wallet />
          </div>

          <div>
            <h3>Ethereum Wallet</h3>
            <p>3.12 ETH</p>
          </div>

          <div className="wallet-price">
            <ArrowUpRight size={18} />
            <span>$7,850</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;