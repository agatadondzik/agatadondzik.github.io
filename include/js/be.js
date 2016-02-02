 $(document).ready(function() {

	// Set behance api key
	behanceAPI.setKey(behancekey);
	
	// Get projects
	behanceAPI.getProjects('agatadondzik', function(projectlist) {

		// console.dir(projectlist);
		var projectHTML = "";
		for(var i=(projectlist.length-1); i>=0; i--){  //Start with the latest behance project
			var project = projectlist[i];
			// projectHTML += "<h2>" + project.name + "</h2>";
		$('#projects ul').prepend('<li class="item-thumbs col-sm-3 col-md-3 Design"><a class="hover-wrap" href="#"  data-toggle="modal" data-target="#myModal" onclick="loadProject('+project.id+')"><span class="overlay-img"></span><span class="overlay-img-thumb font-icon-plus"></span></a><img class="coverimage" src="'+project.covers[202]+'"></li>');
		
		}	
		$
	});
});

 function loadProject(projectID) {
        	behanceAPI.getProjectDetails(projectID, function(loadModules) {

		// console.dir(loadModules);
		var moduleHTML = "";

    var moduleTitle = "";
    moduleTitle += "<h1>" + loadModules.name + "</h1>";
    $("#myModalLabel").html(moduleTitle);
	
	/*if(moduleTitle=='<h1>AGI Brochure</h1>'){
	$('.modal-body').css('background','#d2d2d2');
	$('.modal-body').css('color','#26292E');
	$('.modal-body p span').css('color','#d2d2d2');
	} else {
		$('.modal-body').css('background','#26292E');
	}*/
	
    var moduleDescription = "";
    moduleDescription += "<p>" + loadModules.description + "</p>";
	//if(moduleTitle=='<h1>AGI Brochure</h1>'){moduleDescription=""}

    $(".modal-description").html(moduleDescription);
	
	$(".modal-description").each(function() {
    $(this).html($(this).html().replace("Client:", "<span>" + "Client:" + "</span>")); 
	$(this).html($(this).html().replace("Date:", "<span>" + "Date:" + "</span>"));
	$(this).html($(this).html().replace("Medium:", "<span>" + "Medium:" + "</span>"));
	$(this).html($(this).html().replace("About:", "<span>" + "About:" + "</span>"));
	$(this).html($(this).html().replace("www.brandiacentral.com", "<a>" + "www.brandiacentral.com" + "</a>"));
	$(this).html($(this).html().replace("www.agi.my", "<a>" + "www.agi.my" + "</a>"));
});

		for(var i=0; i<loadModules.modules.length; i++) {
			if(loadModules.modules[i].src!=undefined) {
				moduleHTML += "<p><img class='img-responsive' src='" + loadModules.modules[i].src + "'>";
				moduleHTML += "</p>";
			}
		}
		moduleHTML += "<div class='centre' id='behance-button'></div>";
		$(".modal-work").html(moduleHTML);
		$("#behance-button").behanceButton(projectID); // replace `1234567` with your actual project's ID
	});
        }
	