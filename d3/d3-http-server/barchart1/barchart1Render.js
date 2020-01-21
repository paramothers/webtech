let data = [30, 50, 70, 120, 170,60, 300, 200, 284,50,90]
let svgHeight = 200, svgWidth = 500, barPadding = 5;
let barWidth = svgWidth/data.length;

let svg = d3.select('body')
            .append('svg')
            .attr('height', svgHeight)
            .attr('width', svgWidth);

let yScale = d3.scaleLinear()
               .domain([0, d3.max(data)])
               .range([0, svgHeight]);

let barChart1 = svg.selectAll("rect")
                   .data(data)
                   .enter()
                   .append('rect')
                   .attr('width', barWidth-barPadding)
                   .attr('height',(d) => yScale(d))
                   .attr('fill','orange')
                   .attr('y', (d) => svgHeight - yScale(d))
                   .attr('transform', (d,i) => {
                        //transform can be in both direction
                        let translate = [barWidth*i, 0]
                        return 'translate('+ translate +')';
                   });

let textSelection = svg.selectAll('text')
                       .data(data)
                       .enter()
                       .append('text')
                       .text(d => d)
                       .attr('y', d => yScale(Math.abs(svgHeight - d - 2)))
                       .attr('x', (d, i) => barWidth * i)
                       .attr('fill','#A6C438')

