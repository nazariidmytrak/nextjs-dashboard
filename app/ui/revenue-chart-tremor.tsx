import { BarChart, Card } from '@tremor/react';

export default function RevenueChartTremor({ revenue }: any) {
  return (
    <Card>
      <BarChart
        data={revenue}
        index='month'
        categories={['revenue']}
        colors={['blue']}
        showAnimation
      />
    </Card>
  );
}
