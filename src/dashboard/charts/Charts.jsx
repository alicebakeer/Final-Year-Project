import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const RevenueChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#151521',
        titleColor: '#f3f4f6',
        bodyColor: '#f3f4f6',
        borderColor: 'rgba(170, 59, 255, 0.2)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: { 
        grid: { display: false },
        ticks: { color: '#9ca3af', font: { size: 10 } }
      },
      y: { 
        grid: { color: 'rgba(255, 255, 255, 0.03)' },
        ticks: { color: '#9ca3af', font: { size: 10 } }
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        fill: true,
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 45000, 42000, 55000, 60000],
        borderColor: '#aa3bff',
        backgroundColor: 'rgba(170, 59, 255, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 3,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export const TransactionStatusChart = () => {
  const data = {
    labels: ['Success', 'Pending', 'Failed', 'Refunded'],
    datasets: [
      {
        data: [65, 15, 10, 10],
        backgroundColor: [
          '#10b981',
          '#f59e0b',
          '#ef4444',
          '#aa3bff',
        ],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#9ca3af',
          font: { size: 11 },
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: '#151521',
        padding: 12,
        cornerRadius: 8,
      },
    },
    cutout: '70%',
  };

  return <Doughnut data={data} options={options} />;
};
