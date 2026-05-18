import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowUpRight, Download, Filter, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';

const transactions = [
  { id: 'TX-12345', user: 'Sarah Johnson', country: 'United Kingdom', amount: '$1,240.00', status: 'Success', date: 'Oct 24, 2024', type: 'incoming' },
  { id: 'TX-12346', user: 'Michael Chen', country: 'Canada', amount: '$750.00', status: 'Pending', date: 'Oct 23, 2024', type: 'outgoing' },
  { id: 'TX-12347', user: 'Elena Rodriguez', country: 'Spain', amount: '$2,100.00', status: 'Failed', date: 'Oct 22, 2024', type: 'incoming' },
  { id: 'TX-12348', user: 'David Smith', country: 'USA', amount: '$450.00', status: 'Success', date: 'Oct 22, 2024', type: 'outgoing' },
  ];

export const TransactionsTable = () => {
  return (
    <div className="glass-card p-6 border-white/5 space-y-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Recent Transactions</h3>
          <p className="text-sm text-text-secondary">Summary of the latest global money transfers.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-text-secondary hover:text-accent transition-all"><Filter size={18} /></button>
          <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-text-secondary hover:text-accent transition-all"><Download size={18} /></button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">ID</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">User</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Country</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Amount</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {transactions.map((tx, i) => (
              <motion.tr
                key={tx.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-5 px-4">
                  <span className="text-sm font-bold text-text-primary font-mono">{tx.id}</span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">
                        {tx.user.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-text-primary">{tx.user}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-sm text-text-secondary">
                  {tx.country}
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-2">
                    {tx.type === 'incoming' ? <ArrowDownLeft size={14} className="text-green-500" /> : <ArrowUpRight size={14} className="text-accent" />}
                    <span className="text-sm font-bold text-text-primary">{tx.amount}</span>
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    tx.status === 'Success' ? "bg-green-500/10 text-green-500" : 
                    tx.status === 'Pending' ? "bg-yellow-500/10 text-yellow-500" : 
                    "bg-red-500/10 text-red-500"
                  )}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-5 px-4 text-xs text-text-secondary">
                  {tx.date}
                </td>
                <td className="py-5 px-4">
                  <button className="p-2 hover:bg-white/5 rounded-lg text-text-secondary transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <p className="text-xs text-text-secondary italic">Showing 5 of 1,240 results</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-text-secondary hover:bg-accent/10 hover:text-accent transition-all">Previous</button>
          <button className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-text-secondary hover:bg-accent/10 hover:text-accent transition-all">Next</button>
        </div>
      </div>
    </div>
  );
};
