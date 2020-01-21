console.log("I am from barchart1.js");
d3.select("p")
   .style("color", "gray")
   .attr("class", "heading")
   .text("I am padhu")

d3.select("body")
   .append("p")
   .text("I am parithi")

d3.select("body")
   .append("p")
   .text("I am Pavalan")


d3.selectAll('p')
  .style("color","blue")
