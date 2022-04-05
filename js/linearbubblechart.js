		// code originated from https://bl.ocks.org/maegul/7d8e7342c649fdc077a6984e52da4b62

		// set page dimensions
        var width = 750,
        height = 250,
        radius = 10;
        padding = 100;
    
    var buttons = d3.selectAll('#buttons')
    buttons.append('button')
                 .text('Happiness')
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
                 .attr('value', 'world_happiness_score')
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
                 .text('GDP')
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
                 .attr('value', 'gdp_per_capita')
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
                 .text('School years')
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
                 .attr('value', 'school_years')
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
                 .text('Sustainable economic development')
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
                 .attr('value', 'sustainable_economic_development_assessment')
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
                 .text('Employment rate')
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
                 .attr('value', 'employment_rate')
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
                 .text('Health expenditure')
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
                 .attr('value', 'health_expenditure_per_person')
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
                 .text('Government effectiveness')
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
                 .attr('value', 'government_effectiveness')
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
                 .text('Female MPs')
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
                 .attr('value', 'women_mps_pct')
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
                 .text('Control of corruption')
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
                 .attr('value', 'control_of_corruption')
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
    
    d3.csv('./data/country_data_non_missing.csv', function(data){
        // define some useful scales
        var radiusScale = d3.scaleLinear()
            .domain(d3.extent(data, function(d) { return parseFloat(d.population) }))
            .range([7, 30]);
        var scaleColor = d3.scaleSequential()
      .domain([0, 1])
      .interpolator(d3.interpolateViridis);;
        var scaleStroke = d3.scaleOrdinal()
            .domain(["Scandinavian Europe", "Europe", "Israel", "New Zealand", "NA"])
            .range(["#338F72", "#73A521", "#C95A2F", "#5A6D98", "#A0A0A0"]);
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

            if(selected_variable == "world_happiness_score") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Happiness score: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Happiness score");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("Happiness is measured based on an the average happiness score collected in an annual worldwide survey.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("According to this survey, Scandinavian countries seem to be the happiest in the world, with Israel, Costa Rica, New Zealand and Australia up there too. All bubbles are colored based on their happiness.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Less happy");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("More happy");
            } else if (selected_variable == "gdp_per_capita") {
                pre_symbol = "$"
                post_symbol = ""
                pretty_variable = "GDP per capita: "
                formatValue = d3.format(",");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("GDP per capita");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("GDP per capita measures the value of a country's economic activity relative to the size of its population.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("The countries with the highest GDP per capita are Luxemborg and Singapore. In general it does seem as though happier countries have higher GDP per capita.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower GDP per capita");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher GDP per capita");
            } else if (selected_variable == "school_years") {
                pre_symbol = ""
                post_symbol = " years"
                pretty_variable = "School years: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Years of schooling");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("The countries whose citizens spend the most years in school are Australia, Iceland, and Belgium, each with an average of 20 years of schooling. Each of these countries also rank fairly highly on the happiness scales.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("There seems to be a general correlation between happiness and school years, with several exceptions such as Greece with an average of 18 years of schooling, but is less happy than their school-length counterparts.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Less school");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("More school");
            } else if (selected_variable == "sustainable_economic_development_assessment") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Sustanable economic development score: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Sustainable economic development");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("The sustainable economic development assessment is based on 40 indicators of sustainability, economics and investment.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("The happiest countries also tend to have the highest sustainable economic development. However, Israel and Costa Rica, both of which are considered very happy countries have lower sustainable economic development than their happiness counterparts.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower sustainable economic development");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher sustainable economic development");
            } else if (selected_variable == "employment_rate") {
                pre_symbol = ""
                post_symbol = "%"
                pretty_variable = "Percent employed: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Employment rate");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("The employment rate is the proportion of the working age population who are employed. Most countries have fairly high employment rates.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("There does NOT appear to be a strong correlation between employment rate and happiness.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower employment");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher employment");
            } else if (selected_variable == "health_expenditure_per_person") {
                pre_symbol = "$"
                post_symbol = ""
                pretty_variable = "Health expenditure per person: "
                formatValue = d3.format(",");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Health expenditure");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("Health expenditure is calculated per person. Despite its lack of a universal health care system, the United States has the highest healthcare expenditure per person in the world.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("Overall health expenditure per person appears to be strongly correlated with happiness.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower health expenditure");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher health expenditure");
            } else if (selected_variable == "government_effectiveness") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Government effectiveness score: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Government effectiveness");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("Government effectiveness measures the percieved quality of public services, civil service, policy formation, government commitment and is measured on a scale from -2.5 to +2.5");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("There appears to be a correlation of government effectiveness with happiness. However Costa Rica, which is an apparently happy country has surprisingly low governemnt effectiveness score, and Botswana which is an apparently very unhappy country has a surprisingly high governemnt effectiveness score.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Lower government effectiveness");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Higher government effectiveness");
            } else if (selected_variable == "women_mps_pct") {
                pre_symbol = ""
                post_symbol = "%"
                pretty_variable = "Female MPs: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Proportion of female MPs");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("The proportion of MPs that are women does not seem to be stronly correlated with happiness.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text("However, the happiest countries in the world do tend to have more female MPs, but there are also many less happy countries with lots of female MPs.");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Fewer female MPs");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("More female MPs");
            } else if (selected_variable == "control_of_corruption") {
                pre_symbol = ""
                post_symbol = ""
                pretty_variable = "Control of corruption score: "
                formatValue = d3.format(".2n");
    
                d3.select("#p0").transition().duration(800).style("opacity", 1).text("Control of corruption");
                d3.select("#p1").transition().duration(800).style("opacity", 1).text("The governemnt's percieved control of corruption appears to be somewhat correlated with happiness, despite some seemingly unhappy countries such as Botswana having surprisngly high control of corruption, and some seemingly happy countries such as Costa Rica, having lower control of corruption.");
                d3.select("#p2").transition().duration(800).style("opacity", 1).text(" ");
    
                d3.select("#less").transition().duration(800).style("opacity", 1).text("Worse control of corruption");
                d3.select("#more").transition().duration(800).style("opacity", 1).text("Better control of corruption");
            };
        })
    })