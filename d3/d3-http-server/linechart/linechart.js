const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

document.addEventListener('DOMContentLoaded', (e) => {

    fetch(api)
    .then( response => response.json())
    .then( data => {

        let parsedData = parseData(data);
        drawChart(parsedData);
    })
    .catch( err => console.log(err))
})

function parseData(data) {

    let arr = [];
    for(let i in data.bpi){
        arr.push({
            date: new Date(i),
            value: +data.bpi[i]
        })
    }

    return arr;
}

function drawChart(data){

    let svgWidth = 600;
    let svgHeight = 400;

    let margin = { top: 20, right: 20, bottom:30, left:50};

    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;

    let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)


    let g = svg.append('g')
                .attr('transform', 'translate('+ margin.left+','+ margin.top+')')
    let x = d3.scaleTime()
              .rangeRound([0, width]);
    let y = d3.scaleLinear()
              .rangeRound([height, 0]);

    let line = d3.line()
                 .x( d => x(d.date))
                 .y( d => y(d.value))
                 x.domain(d3.extent(data, d => d.date))
                 y.domain(d3.extent(data, d => d.value))
    g.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(d3.axisBottom(x))
        .select('.domain')
        .remove();

    g.append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill','#000')
        .attr('transform','rotate(-90)')
        .attr('y',6)
        .attr('dy','0.71em')
        .attr('text-anchor','end')
        .text('Price ($)');

    g.append('path')
        .datum(data)
        .attr('fill','none')
        .attr('stroke','steelblue')
        .attr('stroke-linejoin','round')
        .attr('stroke-linecap','round')
        .attr('stroke-width','1.5')
        .attr('d',line);


}