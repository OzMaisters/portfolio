	
	/* Filter porfolio projects by class name*/
	function filter_projects(type){
		var cards = document.getElementsByClassName("project-card");
		/* Hide all projects */
		for(i=0; i<cards.length; i++){
			cards[i].style.display = "none";
		}

		/* Show selected projects */
		if(type){
			cards = document.getElementsByClassName(type);
		}
		for(i=0; i<cards.length; i++){
			cards[i].style.display = "block";
		}
	} 
  
  
	/* Change class of selected filter element */
	var container = document.getElementById("filter-cont");
	container.addEventListener('click', function(e) {
		var target = e.target;
		if (target.classList.contains("filter-button")) {
			var buttons = document.getElementsByClassName("filter-button")
			for(let i=0; i<buttons.length; i++){
				buttons[i].classList.remove("active-filter");
			}
			target.classList.add("active-filter");
		}
	})