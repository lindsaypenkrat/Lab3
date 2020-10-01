//Part 1

let data  = d3.csv('cities.csv', d3.autoType).then(data=>{
    data = data.filter(d=>d.eu == true);
    console.log(data);
    d3.select('.city-count').text(function(d) { return d = data.length + ' cities'; });

    const width=700; 
    const height = 550;
    const svg = d3.select('.population-plot').append('svg')
        .attr('width', width)
        .attr('height', height)

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'cities')
        .attr('cx', d=>d.x)
        .attr('cy', d=>d.y)
        .attr('r', d=> (d.population  < 1000000) ? 4 : 8)
        .attr('fill', '#7ea37e')
        
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'cityLabels')
        .attr('x', d=>d.x - 30)
        .attr('y', d=>d.y + 5 )
        .text(d=>(d.population >= 1000000) ? d.city : '')
        .attr('font-size', 11)
        .attr('text-anchor', 'middle')     
        
        
});
