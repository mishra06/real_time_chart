const real = document.querySelector("#myChart");
const labels = [];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Growth level",
      data: [],
      fill: false,
      borderColor: "rgb(75, 190, 110)",
      tension: 0.1,
    },
  ],
  
};

const config = {
  type: "line",
  data: data,
};
let chart = new Chart(real, config,)

function adddata() {
  chart.data.labels.push(chart.data.labels.length+1);
  chart.data.datasets[0].data.push(Math.random()*100)
  chart.update()

}
setInterval(adddata, 1000);
