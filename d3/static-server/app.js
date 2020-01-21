
const canvas = d3.select(".canvas");

const svg = canvas.append("svg")
                  .attr("width","500")
                  .attr("height","250");

    // svg.append("circle")
    //     .attr("cx","100")
    //     .attr("cy","100")
    //     .attr("fill","blue")
    //     .attr("r","50")


    // svg.append("rect")
    //    .attr("width",10)
    //    .attr("height",50)
    //    .attr("x",50)
    //    .attr("y",90)
    //    .attr("fill","green")
    //    .attr("rx",4)
    //    .attr("ry",3)

    // svg.append("line")
    //     .attr("x1",129)
    //     .attr("y1",45)
    //     .attr("x2",190)
    //     .attr("y2",145)
    //     .attr("stroke", "gray")

    svg.append("text")
        .text("Hello")
        .attr("text-anchor", "start")
        .attr("fill","gray")
        .attr("font-size", 18)
        .attr("x", 110)
        .attr("y", 20)

    svg.append("text")
        .text("there")
        .attr("fill","green")
        .attr("text-anchor","end")
        .attr("font-size", 18)
        .attr("x", 110)
        .attr("y",40)