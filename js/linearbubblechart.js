		// code originated from https://bl.ocks.org/maegul/7d8e7342c649fdc077a6984e52da4b62

		// set page dimensions
        var width = 750,
        height = 250,
        radius = 10;
        padding = 100;
    
    var buttons = d3.selectAll('#buttons')
    buttons.append('button')
                 .text('PopAge')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'PopAge')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#F8CF46")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('Internet')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'Internet')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('%PopUnemployed')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', '%PopUnemployed')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('GPI')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'GPI')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('Sleep')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'Sleep')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('Working Hours')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'Workinghours')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                 .text('Vacation Days')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'Vacationdays')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
    buttons.append('button')
                .text('Mental Health')
                 .style("font-size", "10px")
                 .style("font-family", "Helvetica Neue")
                 .style("padding", "8px")
                 .style("color", "#454545")
                 .style("text-shadow", "0 1px 2px rgba(0, 0, 0, 0.25)")
                 .style("background", "#ecf0f1")
                 .style("border", "2px solid white")
                 .style("cursor", "pointer")
                 .style("-webkit-box-shadow", "inset 0 -2px #dadedf")
                 .style("box-shadow", "inset 0 -2px #dadedf")
                 .attr('value', 'MentalHealth')
                 .classed('d_sel', true)
                 .on("mouseover", function(d) {
                     d3.select(this)
                             .style("background", "#FFD700")
                            .style("color", "black")
                 })
                 .on("mouseout", function(d) {
                     d3.select(this)
                         .style("background", "#ecf0f1")
                         .style("color", "#454545")
                 })
       
    var svg = d3.select('#chart').append('svg')
                .attr('width', width)
                .attr('height', height)
    
    // define a tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    
    // formatting the data displayed in the tooltip
    var formatValue = d3.format(".2n");
    
    var selected_variable = 'world_happiness_score';
    var selected_variable_scaled = 'world_happiness_score_scaled';
    var pre_symbol = ""
    var post_symbol = ""
    var pretty_variable = "Happiness score: "
    var formatValue = d3.format(".2n");
    
    d3.csv('./data/linearbubblechart.csv', function(data){
        // define some useful scales
        var radiusScale = d3.scaleLinear()
            .domain(d3.extent(data, function(d) { return parseFloat(d.population) }))
            .range([7, 30]);
        var scaleColor = d3.scaleSequential()
      .domain([0, 1])
      .interpolator(d3.interpolateViridis);
        var xScale = d3.scaleLinear()
            .rangeRound([padding, width - padding])
    
        // a function to highlight points when clicked
        var toggleHighlight = (function(){
             var current_stroke_width = 0.5
             var current_stroke = "black"
    
            return function(){
                        current_stroke_width = current_stroke_width == 0.5 ? 3 : 0.5
                        current_stroke = current_stroke == "black" ? "#C40320" : "black"
                d3.select(this).style("stroke-width", current_stroke_width)
                            .style("stroke", current_stroke);
            }
        })();
    
        // set domain for selected variable
        xScale.domain(d3.extent(data, function(d) { return d[selected_variable_scaled]; }));
    
        function tick(){
    
            d3.selectAll('.circ')
                .attr('cx', function(d){return d.x})
                .attr('cy', function(d){return d.y})
        }
    
        var circles = svg.selectAll('.circ')
            .data(data)
            .enter().append('circle').classed('circ', true)
            .attr('r', function(d) { return radiusScale(d.population); })
            .attr('cx', function(d){ return xScale(d[selected_variable_scaled]); })
            .attr('cy', function(){ return height/2; })
            .attr("fill", function(d) { return scaleColor(d.world_happiness_score_scaled); })
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            .on('click', toggleHighlight)
    
            circles.on("mouseover", function(d) {
                        d3.select(this)
                            .attr("stroke", "black")
                            .attr("stroke-width", 3);
    
    
                        d3.select("#prettytooltip")
    //       px distance from left edge of svg
                            .style("left", (d3.event.pageX) + "px")
    //       px distance from top edge of svg
                            .style("top", (d3.event.pageY - 90) + "px")
    // 			 update value for label box
                            .select("#country")
                            .text(d.country)
                        d3.select("#prettytooltip")
                            .select("#value")
                            .text(formatValue(d[selected_variable]));
                        d3.select("#prettytooltip")
                            .select("#pretty_variable")
                            .text(pretty_variable);
                        d3.select("#prettytooltip")
                            .select("#post_symbol")
                            .text(post_symbol);
                        d3.select("#prettytooltip")
                            .select("#pre_symbol")
                            .text(pre_symbol);
    
                        //Show the tooltip
                        d3.select("#prettytooltip").classed("hidden", false);
                   })
                   .on("mouseout", function() {
                            //Hide the tooltip
                            d3.select("#prettytooltip").classed("hidden", true);
                            d3.select(this)
                                .attr("fill", function(d) {return scaleColor(d.world_happiness_score_scaled); })
                                .attr("stroke", "black")
                                .attr("stroke-width", 0.5)
                                .attr("r", function(d) { return radiusScale(d.population); });
                   })
    
        var simulation = d3.forceSimulation(data)
            .force('x', d3.forceX(function(d){
                    return xScale(d[selected_variable_scaled])
                })
            )
            .force('y', d3.forceY(height/2).strength(0.03))
            .force('collide', d3.forceCollide(function(d) { return radiusScale(d.population); }).strength(0.9))
            .alpha(0.01)
            .alphaTarget(0.3)
            .alphaDecay(0.1)
            .on('tick', tick)
    
        d3.selectAll('.d_sel').on('click', function(){
    
            selected_variable = this.value;
            selected_variable_scaled = this.value + '_scaled';
    
            simulation.force('x', d3.forceX(function(d){
                return xScale(d[selected_variable_scaled])
            }))

            if(selected_variable == "PopAge") {
                pre_symbol = ""
                post_symbol = "%"
                pretty_variable = "Pop. aged 15-64: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Population Age 15-64");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower Population Age");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher Population Age");

            } else if (selected_variable == "Internet") {
                pre_symbol = ""
                post_symbol = "%"
                pretty_variable = "Internet Penetration: "
                formatValue = d3.format(",");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Internet Penetration");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower Internet Penetration");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher Internet Penetration");

            } else if (selected_variable == "%PopUnemployed") {
                pre_symbol = ""
                post_symbol = "%"
                pretty_variable = "Pop. Unemployed: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Percentage of Population Unemployed");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Low unemployment rate");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("High unemployment rate");

            } else if (selected_variable == "GPI") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "GPI: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Global Peace Index (GPI)");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower GPI");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher GPI");

            } else if (selected_variable == "Sleep") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Sleep: "
                formatValue = d3.format(",");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Sleep");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower Sleep");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher Sleep");

            } else if (selected_variable == "Workinghours") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Working hours: "
                formatValue = d3.format(",");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Working Hours");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower Working Hours");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher Working Hours");

            } else if (selected_variable == "Vacationdays") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Vacation Days: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Vacation Days");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Low Vacation Days");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("High Vacation Days");

            } else if (selected_variable == "MentalHealth") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Mental Health: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Mental Health");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Worse Mental Health");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Better Mental Health");
            };
        })
    })