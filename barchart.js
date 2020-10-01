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
        .attr('x', 150)
        .attr('fill', 'skyblue')
        .on('click', (d,i)=>{
            d3.select('.image')
                .attr('src', 'img/'+i.image);
            d3.select('.building')
                .text(i.building)
            d3.select('.country')
                .text(i.country);
            d3.select('.city')
                .text(i.city);
            d3.select('.height')
                .text(i.height_ft +" feet");
            d3.select('.floors')
                .text(i.floors);
            d3.select('.completed')
                .text(i.completed);
        });   
        

    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'buildingLables')
        .attr('x', d=>140)
        .attr('y', (d,i) =>  svgheight - 85 - (barHeight*i*1.5))
        .text(d=> d.building)
        .attr('font-size', 11)
        .attr('text-anchor', 'end')   

});