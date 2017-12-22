$(document).ready(function(){

	d3.select("form").on("submit", function(){
		d3.event.preventDefault();
		var externalLink = "http://en.wikipedia.org/?curid=";
		var link = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=50&srsearch=";
		var inputData = $("#inputText").val().replace(" ", "%");

		if(inputData === ""){
			alert("Please, enter your query in order to get results... ");
		}
		else{
			link += inputData;
			console.log(link);

	//=============AJAX request to wiki API===========================
			$.ajax(link, requestParams)
			.done(function(response){
				var res = response.query.search;
				console.log(res);
				
				var dataList = d3.select("#searchResults")
								.html(`<div>We found ${res.length} results that match your query: </div>`)
							.selectAll("p")
							.data(res)
								.html(d => {
								var pageLink = 0;
								pageLink = externalLink + d.pageid;
								console.log(pageLink);
								return `<a href=${pageLink} target="_blank"> ${d.snippet} </a>`;
							});

					dataList.enter().append("p")
						.classed("wikiresponse", true)
						.html(d => {
								var pageLink = 0;
								pageLink = externalLink + d.pageid;
								console.log(pageLink);
								return `<a href=${pageLink} target="_blank"> ${d.snippet} </a>`;
							});

					dataList.exit().remove();
			})
			.fail(errorHandler);

			$("#inputText").val("");
		}
	});

});

var requestParams = {
    method: "GET",
    dataType: "jsonp",
}

function errorHandler(error){
    console.log("There was an ERROR while submitting your request");
    console.log(error);
}
