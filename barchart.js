let buildingData  = d3.csv('buildings.csv').then(data =>{ 
    data.sort((d1,d2)=>d1.height_m - d2.height_m);
    console.log(data);
    const svgwidth=500; 
    const svgheight = 500;
    const barHeight = 25

    const svg = d3.select('.height-chart').append('svg')
        .attr('width', svgwidth)
        .attr('height', svgheight)

    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'buildings')
    .attr('width', d=>d.height_px)
    .attr('height', barHeight)
    .attr('y', (d,i) =>  svgheight - 100 - (barHeight*i*1.5))
    .attr('x', 20)


});