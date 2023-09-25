import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [totalDonations, setTotalDonations] = useState([]);
  const [myDonations, setDonations] = useState([]);
  useEffect(() => {
    const donationsItems = JSON.parse(localStorage.getItem('donations'));
    setDonations(donationsItems);

    fetch('/donation.json')
      .then((res) => res.json())
      .then((data) => setTotalDonations(data));
  }, []);

  const totalDonation = totalDonations.length;
  const myDonation = myDonations.length;
  const COLORS = ['#FF444A', '#00C49F'];

  const myDonationPercentage = ((myDonation / totalDonation) * 100);
  const totalPercentage = 100 - myDonationPercentage;

  const data = [
    { name: 'Total Donation', value: totalPercentage  },
    { name: 'Your Donation', value: myDonationPercentage },
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    let labelText;
    if (name === 'Total Donation') {
      labelText = `${value.toFixed(1)}%`;
    } else {
      labelText = `${value.toFixed(1)}%`;
    }

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${labelText}`}
      </text>
    );
  };

  return (
    <div className="h-[400px]">
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name, ) => [`${(value).toFixed(1)}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
