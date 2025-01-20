import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

function BarChart(){
  const barChartRef = useRef(null);
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
    if (barChartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Revenue",
              backgroundColor: "rgba(0, 97, 242, 1)",
              hoverBackgroundColor: "rgba(0, 97, 242, 0.9)",
              borderColor: "#4e73df",
              data: [4215, 5312, 6251, 7841, 9821, 14984],
              maxBarThickness: 25
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
              grid: { display: false, drawBorder: false },
              ticks: { maxTicksLimit: 6 }
            },
            y: {
              ticks: {
                min: 0,
                max: 15000,
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
              backgroundColor: "rgba(255,255,255,0.95)",
              titleFont: { size: 14, weight: "bold" },
              titleColor: "#000",
              bodyFont: { size: 14 },
              bodyColor: "#333",
              borderColor: "rgba(0, 97, 242, 1)",
              borderWidth: 1,
              padding: 15,
              displayColors: false,
              intersect: false,
              mode: "index",
              caretPadding: 10,
              callbacks: {
                title: function (tooltipItems) {
                  return tooltipItems[0].label;
                },
                label: function (tooltipItem) {
                  return `Revenue: $${numberFormat(tooltipItem.raw)}`;
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

    return(     
      // <div className="card mb-4">
      //   <div className="card-header">Bar Chart Example</div>
      //   <div className="card-body">
          <div className="chart-bar">
            <canvas ref={barChartRef} width="100%" height={50}></canvas>
          </div>
        // <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    );
}

export default BarChart;