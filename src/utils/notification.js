export function success(message) {
	swal({
		title: message,
		type: "success",
		showCancelButton: false,
		confirmButtonColor: "#3085d6",
		confirmButtonText: "確定"
	});
}

export function warning(message) {
	swal({
		title: message,
		type: "warning",
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "確定",
		closeOnConfirm: false
	});
}