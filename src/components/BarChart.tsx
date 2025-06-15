
import React, { useEffect, useRef } from 'react';
import { ChartConfiguration, ChartData, registerables } from 'chart.js';

// Chart.js is loaded via CDN, so window.Chart should be available.
declare global {
  interface Window {
    Chart: any; // Consider using a more specific type if available or define one
  }
}
if (typeof window !== 'undefined' && window.Chart) {
  window.Chart.register(...registerables);
}


interface BarChartProps {
  data: ChartData<'bar', number[], string>;
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null); // To store the chart instance

  useEffect(() => {
    if (!chartRef.current || !window.Chart) return;

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#E0D9F7', // Legend text color
              font: {
                family: 'Poppins, sans-serif',
              }
            }
          },
          title: {
            display: !!title,
            text: title,
            color: '#E0D9F7', // Title text color
            font: {
                size: 18,
                family: 'Poppins, sans-serif',
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(224, 217, 247, 0.2)', // Grid line color
            },
            ticks: {
              color: '#E0D9F7', // Y-axis tick labels
               font: {
                family: 'Poppins, sans-serif',
              }
            }
          },
          x: {
            grid: {
              display: false, // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              color: '#E0D9F7', // X-axis tick labels
               font: {
                family: 'Poppins, sans-serif',
              }
            }
          }
        }
      }
    };
    
    chartInstanceRef.current = new window.Chart(ctx, config);

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, title]); // Re-render chart if data or title changes

  return (
    <div className="glassmorphism p-4 rounded-lg shadow-lg h-80 md:h-96">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
