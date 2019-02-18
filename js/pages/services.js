$.getJSON("http://localhost/salon-api/services/GET-services.php", function(res){
	console.table(res);
	for(var i = 0; i < res.length; i++){
		var tablerow = $('<tr>')

		var serviceID = $('<td>');
		serviceID.text(res[i].service_ID);

		var categoryName = $('<td>');
		categoryName.text(res[i].category_name) 

		var name = $('<td>');
		name.text(res[i].name);

		var price = $('<td>');
		price.text(res[i].price);

		var duration = $('<td>');
		duration.text(res[i].duration);

		var status = $('<td>');
		status.text(res[i].status);


		var buttonGroup = $("<div>")
		
		var buttonEdit = $("<button type='button' class='btn btn-green px-3' aria-hidden='true' data-toggle='modal' data-target='#basicExampleModal'>");
		var buttonEditIcon = $("<i class='fa fa-edit'>");

		
		var buttonDelete = $("<button type='button' class='btn btn-red px-3' aria-hidden='true' data-toggle='modal' data-target='#modalDelete'>");
		var buttonDeleteIcon = $("<i class='fa fa-trash'>");
		
		//mount icon to button
		buttonEdit.append(buttonEditIcon);
		buttonDelete.append(buttonDeleteIcon);

		//mount buttons to button group
		buttonGroup.append(buttonEdit);
		buttonGroup.append(buttonDelete)


		//mount all td to tr
		tablerow.append(serviceID);
		tablerow.append(categoryName);
		tablerow.append(name);
		tablerow.append(price);
		tablerow.append(duration);
		tablerow.append(status);
		tablerow.append(buttonGroup);

		// mount tr to tbody
		$('#tbldata').append(tablerow)
	}
	//console.log(res)	
})