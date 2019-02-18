var url="http://localhost/salonhubAPI";
function editmodal_data(id){
	localStorage.setItem('merch_id',id);
}
var base64img = "";

function readFile() {
	if (this.files && this.files[0]) {
		var FR = new FileReader();
		FR.addEventListener("load", function (e) {
			base64img = e.target.result;
		});
		FR.readAsDataURL(this.files[0]);
	}
}

try {
	document.getElementById("merch_image").addEventListener("change", readFile);
} catch (err) {

}

try	{
	document.getElementById("image").addEventListener("change", readFile);
} catch (err){

}



function addService(){
	let data = {
		service_name:document.getElementById("service_name").value,
		service_price:document.getElementById("service_price").value,
		service_duration:document.getElementById("service_duration").value

	}

	fetch(url+"/insert/tbl_service",{
		method: "POST",
		body: JSON.stringify([data])
	}).then(function(data){
		if (data['status'] === 'error') {
			toastr.error('Service Not Added. Error!');
		}else{
			toastr.success('Service Added.');
		}
	});
}

function pending(){
	fetch(url+"/tbl_appointments/user_ID/tbl_user/user_ID").then((res)=>res.json()).then(function(data){
		var ls = "";
		var lss = "";
		if (data.length <= 0) {
			ls = "";
			lss = "";
			ls += "<tr><td colspan='5'>Nothing Found</td></tr>";
			lss += "<tr><td colspan='5'>Nothing Found</td></tr>"
		}else{
			for (var i = 0; i < data.length; i++){
				if (data[i].status == 'Pending'){
					ls += "<tr>";
					ls += "<td>" + data[i].customer_name + "</td>";
					ls += "<td>" + data[i].service_name + "</td>";
					ls += '<td><button class="modal-triggered btn btn-outline-primary btn-medium" data-toggle="modal" data-target="editmodal" onclick="approved_appointment(' + data[i].apt_ID +')"><i class="fa fa-check"></i></button></td>';
					ls += "</tr>";
				}
			}
		}
		document.getElementById("pending").innerHTML= ls;
	});
}

function upcommingAppt(){
	fetch(url+"/tbl_schedule/user_ID/tbl_user/user_ID").then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			ls = "";
			ls += "<tr><td colspan='5'>Nothing Found</td></tr>";
		}else{
			for (var i = 0; i < data.length; i++){
				if (data[i].fldStatus == 'Pending'){
					ls += "<tr>";
					ls += "<td>" + data[i].user_ID + "</td>";
					ls += "<td>" + data[i].user_fullname + "</td>";
					ls += "<td>" + data[i].sched_date + "</td>";
					ls += "<td>" + data[i].fldServiceName + "</td>";
					ls += "<td>" + data[i].fldCreatedOn + "</td>";
					ls += '<td><button type="button" class="btn btn-green px-3"><i class="fa fa-check" aria-hidden="true"></i></button></td>';
					ls += "</tr>";
				}
			}
		}
		document.getElementById("emp_tbldata").innerHTML= ls;
	});
}

function approved_appointment(id){
	var data ={
		complaint_status: 'Approved'
	}
	console.log(JSON.stringify([data]));
		fetch(url+"/update/tbl_appointments/apt_ID/"+id,{
			method: "POST",
			body: JSON.stringify([data])
		}).then(function(data){
				if(data['status'] === 'error') {
					toastr.error('Failed!');
					pending();
				}else{
					toastr.success('Appointment Completed!');
					pending();
				}
		});
	}
