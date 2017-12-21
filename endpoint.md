https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=50&srsearch=San%Francisco

http://en.wikipedia.org/?curid=18630637

Workflow notes:

1. AJAX requests submits successfully infinite number of times. Though, d3 loads page content only once. 
	I need a fix to make it reload every time new AJAX request is submitted ---DONE
	
2. Fix request data presentation: % should be instead of spaces ---FIXED //used pageid to find corresponding wiki pages

3. Style the page with css
