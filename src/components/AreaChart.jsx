import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const AreaChart = () => {
    const areaChartRef = useRef(null);
    const chartInstance = useRef(null);
  
    const numberFormat = (number, decimals = 2, decPoint = ".", thousandsSep = ",") => {
      number = (number + "").replace(",", "").replace(" ", "");
      let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = thousandsSep || ",",
        dec = decPoint || ".",
        s = "",
        toFixedFix = (n, prec) => {
          let k = Math.pow(10, prec);
          return "" + Math.round(n * k) / k;
        };
  
      s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
      }
      return s.join(dec);
    };
  
    useEffect(() => {
      if (areaChartRef.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new Chart(areaChartRef.current, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Earnings",
                lineTension: 0.3,
                backgroundColor: "rgba(0, 97, 242, 0.1)",
                borderColor: "rgba(0, 97, 242, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(0, 97, 242, 1)",
                pointBorderColor: "rgba(0, 97, 242, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(0, 97, 242, 1)",
                pointHoverBorderColor: "rgba(0, 97, 242, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                fill: 'start',
                data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0,
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { maxTicksLimit: 7 },
              },
              y: {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  callback: function (value) {
                    return "$" + numberFormat(value);
                  },
                },
                grid: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: "rgba(255,255,255,0.9)",
                titleFont: { size: 16, weight: "bold" },
                titleColor: "#000",
                bodyFont: { size: 14 },
                bodyColor: "#333",
                borderColor: "rgba(0, 97, 242, 1)",
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                intersect: false,
                mode: "index",
                caretPadding: 10,
                callbacks: {
                  title: function (tooltipItems) {
                    return tooltipItems[0].label; // 예: 'Sep'
                  },
                  label: function (tooltipItem) {
                    return `Earnings: $${numberFormat(tooltipItem.raw)}`;
                  },
                },
              },
            },
          },
        });
      }
  
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);
  return (
    // <div className="card mb-4"> 
    //   <div className="card-header">Area Chart Example</div>
    //   <div className="card-body">
    
        <div className="chart-area">
          <canvas ref={areaChartRef} width="100%" height={30}></canvas>
        </div>
      //<div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    
    
  );
};

export default AreaChart;