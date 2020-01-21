const canvas = d3.select(".canvas");
const data = [40, 60, 40, 70, 90, 0, 30];

let dataArray;

d3.json("file:///E:/param/git/webtech/d3/first/data.json").then(data => {
  console.log(data);
  dataArray = data;
  const svg = canvas
    .append("svg")
    .attr("width", 600)
    .attr("height", 600);

  const rect = svg.selectAll("rect");

  rect
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("fill", d => d.color)
    .attr("width", d => d.width)
    .attr("height", d => d.height)
    .attr("x", (d, i) => i * 26)
    .attr("y", (d, i) => 100 - d.height);
});
