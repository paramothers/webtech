let svgWidth = 600, svgHeight = 500;

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .attr('class', 'svg-container');

let line = svg.append('line')
             .attr('x1', 30) 
             .attr('x2',200)
             .attr('y1',35)
             .attr('y2',35)
             .attr('stroke','red')
             .attr('stroke-width', 5)

let rect = svg.append('rect')
              .attr('x', 100)
              .attr('y',100)
              .attr('width', 200)
              .attr('height', 100)
              .attr('fill','#9B95FF');

let circle = svg.append('circle')
                .attr('cx', 200)
                .attr('cy',300)
                .attr('r', 90)
                .attr('fill', '#7CE8D5');