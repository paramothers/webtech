radius = 20;
footBallData = null;

fetch("http://localhost:8080/data/worldcup.csv")
  .then(result => result.text())
  .then(data => {
    footBallData = d3.csvParse(data);
    this.overalTeamViz(footBallData);
  });

let buttonClick = attribute => {
  let maxValue = d3.max(footBallData, d => parseFloat(d[attribute]));
  let radiousScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([2, this.radius]);

  d3.selectAll("g.overallG")
    .select("circle")
    .transition()
    .duration(1000)
    .attr("r", d => radiousScale(d[attribute]));
};

function overalTeamViz(footBallData) {
  function hightlightRegion(d, i, node) {
    console.log("hightlightRegion - target ", d3.event.target);
    console.log("hightlightRegion - d ", d);
    console.log("hightlightRegion - i ", i);
    console.log("hightlightRegion - node ", node);

    d3.select(node)
      .select("text")
      .classed("active", true)
      .attr("y", 10);
    d3.selectAll("g.overallG")
      .select("circle")
      .each(function(p) {
        p.region == node.region
          ? d3.select(node).classed("active", true)
          : d3.select(node).classed("inactive", true);
      });

    node.parentElement.appendChild(node);
  }

  function unHighlight() {
    console.log("unHighlight - target ", d3.event.target);
    d3.selectAll("g.overallG")
      .select("circle")
      .attr("class", "");
    d3.selectAll("g.overallG")
      .select("text")
      .classed("active", false)
      .attr("y", 30);
  }

  if (footBallData) {
    d3.select("svg")
      .append("g")
      .attr("id", "teamsG")
      .attr("transform", "translate(50,50)")
      .selectAll("g")
      .data(footBallData)
      .enter()
      .append("g")
      .attr("class", "overallG")
      .attr("transform", (d, i) => "translate(" + i * 100 + ",0)");

    let teamG = d3.selectAll("g.overallG");

    teamG.append("circle").attr("r", this.radius);

    teamG
      .append("text")
      .attr("y", 30)
      .attr("x", 0)
      .text(d => d.team);

    teamG.on("mouseover", (d, i, nodes) => {
      hightlightRegion(d, i, nodes[i]);
    });

    teamG.on("mouseout", () => {
      d3.selectAll(".overallG")
        .select("circle")
        .classed("inactive", false)
        .classed("active", false);
    });

    const attributes = Object.keys(footBallData[0]).filter(
      attrbutte => attrbutte !== "team" && attrbutte !== "region"
    );
    d3.select("#controls")
      .selectAll("button.teams")
      .data(attributes)
      .enter()
      .append("button")
      .on("click", buttonClick)
      .html(d => d);

    teamG.on("mouseout", unHighlight);

    /* teamG
            .append('circle')
            .attr('r',0)
            .transition()
            .delay((d,i) =>  i* 100)
            .duration(500)
            .attr('r', 40)
            .transition()
            .duration(500)
            .attr('r',20) */
  }
}
