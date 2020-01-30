let data = [23, 56,89,345,200]

let container = d3.select('#container')

let svgHeight = 200;
let svgWidth = 500;
let barWidth = 25;
let barPadding = 5;

let yScaleLinear = d3.scaleLinear()
                     .range([0, svgHeight])
                     .domain([0, d3.max(data)])
let xScaleLinear = d3.scaleLinear()
                     .range([0, svgWidth])
                     .domain([0, data.length * barWidth])

let svg = container
            .append('svg')
            .attr('width',svgWidth)
            .attr('stroke','red')
            .attr('height', svgHeight);


   svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', 'orange')
        .attr('width', Math.abs(barPadding - xScaleLinear(barWidth)))
        .attr('height', d => yScaleLinear(d))
        .attr('y', (d, i) => svgHeight - yScaleLinear(d))
        .attr('transform', (d, i) =>{
            let transform = [xScaleLinear(barWidth)*i, 0];
            return 'translate('+transform+')'
        })