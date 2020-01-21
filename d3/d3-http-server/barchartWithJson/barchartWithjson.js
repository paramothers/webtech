console.log("Going to get json from server");

d3.json("../data/marks.json").then(data => {
  console.log("data", data);

  let svgHeight = 300,
    svgWidth = 300,
    barPadding = 5;
  let barWidth = svgWidth / data.marks.length;
  let container = d3.selectAll("#container");
  console.log('container', container);
  let svg = container
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    console.log('svg ', svg);
  let selection = svg
    .selectAll("rect")
    .data(data.marks)
    .enter()
    .append("rect")
    .attr("width", barWidth - barPadding)
    .attr("height", d => d)
    .attr("y", d => svgHeight - d)
    .attr('fill', 'orange')
    .attr("transform", (d, i) => {
      let translate = [barWidth * i, 0];
      return "translate(" + translate + ")";
    });

    console.log('selection', selection);
});
