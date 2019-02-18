$.getJSON("http://localhost/salon-api/customers/GET-customers.php", function(res){
	console.table(res);
	for(var i = 0; i < res.length; i++){
		var tablerow = $('<tr>')

		var userID = $('<td>');
		userID.text(res[i].user_ID);

		var fullname = $('<td>');
		fullname = res[i].firstname + ' ' + res[i].lastname;

		var emailAdd = $('<td>');
		emailAdd.text(res[i].email_address);

		var contactNo = $('<td>');
		contactNo.text(res[i].contact_no);

		var gender = $('<td>');
		gender.text(res[i].gender);

		var imagePath = $('<td>');
		imagePath.text(res[i].img_path);


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
		tablerow.append(userID);
		tablerow.append(fullname);
		tablerow.append(emailAdd);
		tablerow.append(contactNo);
		tablerow.append(gender);
		tablerow.append(imagePath);
		tablerow.append(buttonGroup);

		// mount tr to tbody
		$('#tbldata').append(tablerow)
	}
	//console.log(res)	
})