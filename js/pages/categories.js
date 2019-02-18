$.getJSON("http://localhost/salon-api/categories/GET-categories.php", function(res){
	console.table(res);
	for(var i = 0; i < res.length; i++){
		var tablerow = $('<tr>')

		var categoryID = $('<td>');
		categoryID.text(res[i].category_ID);

		var categoryName = $('<td>');
		categoryName.text(res[i].name); 

		var imagePath = $('<td>');
		imagePath.text(res[i].img_path);

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
		tablerow.append(categoryID);
		tablerow.append(categoryName);
		tablerow.append(imagePath);
		tablerow.append(status);
		tablerow.append(buttonGroup);

		// mount tr to tbody
		$('#tbldata').append(tablerow)
	}
	//console.log(res)	
})