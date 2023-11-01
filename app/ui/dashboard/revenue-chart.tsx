import { CalendarIcon } from '@heroicons/react/24/outline';

import { fetchRevenue } from '@/app/lib/data';
import RevenueChartTremor from '../revenue-chart-tremor';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  if (!revenue || revenue.length === 0) {
    return <p className='mt-4 text-gray-400'>No data available.</p>;
  }

  return (
    <div className='w-full md:col-span-4'>
      <RevenueChartTremor revenue={revenue} />
      <div className='flex items-center pb-2 pt-6'>
        <CalendarIcon className='h-5 w-5 text-gray-500' />
        <h3 className='ml-2 text-sm text-gray-500 '>Last 12 months</h3>
      </div>
    </div>
  );
}
