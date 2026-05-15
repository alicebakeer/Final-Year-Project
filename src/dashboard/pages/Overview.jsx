import {
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    Download,
    Users
} from 'lucide-react';
import { Card } from '../../components/ui';
import { RevenueChart, TransactionStatusChart } from '../charts/Charts';
import { StatCard } from '../components/StatCard';
import { TransactionsTable } from '../tables/TransactionsTable';

const Overview = () => {
  const stats = [
    { title: 'Total Revenue', value: '$2,450,900', change: '+12.5%', icon: DollarSign, isPositive: true },
    { title: 'Total Users', value: '45,892', change: '+18.2%', icon: Users, isPositive: true },
    { title: 'Success Transfers', value: '18,245', change: '+24.1%', icon: CheckCircle, isPositive: true },
    { title: 'Pending Transactions', value: '412', change: '-5.4%', icon: Clock, isPositive: false },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Dashboard Overview</h1>
          <p className="text-text-secondary mt-1">Welcome back, Alice. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm font-semibold text-text-secondary hover:text-accent transition-all">
            <Calendar size={18} /> Last 30 Days
          </button>
          <button className="btn-primary flex items-center gap-2 px-6 py-2.5 text-sm">
            <Download size={18} /> Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} index={i} />
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 border-white/5 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-text-primary">Revenue Growth</h3>
              <p className="text-sm text-text-secondary">Monthly volume analytics and projections.</p>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <span className="text-xs text-text-secondary">Revenue</span>
                </div>
            </div>
          </div>
          <div className="flex-1 min-h-[350px]">
            <RevenueChart />
          </div>
        </Card>

        <Card className="p-8 border-white/5 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-text-primary">Transaction Status</h3>
            <p className="text-sm text-text-secondary">Distribution of transfer success rates.</p>
          </div>
          <div className="flex-1 min-h-[300px]">
            <TransactionStatusChart />
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
            {[
                { label: 'Successful', value: '65%', color: 'bg-green-500' },
                { label: 'Pending', value: '15%', color: 'bg-yellow-500' },
                { label: 'Failed', value: '10%', color: 'bg-red-500' },
                { label: 'Refunded', value: '10%', color: 'bg-accent' },
            ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 ${item.color} rounded-full`} />
                        <span className="text-text-secondary">{item.label}</span>
                    </div>
                    <span className="font-bold text-text-primary">{item.value}</span>
                </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Transactions Table */}
      <TransactionsTable />
    </div>
  );
};

export default Overview;
