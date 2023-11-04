$(function () {
	const bnb = {};
	$("li input[type=checkbox]").change(function () {
		const airb = this.dataset;
		if (this.checked) {
			bnb[airb.name] = airb.id;
		} else {
			delete bnb[airb.name];
		}
		$(".amenities h4").text(Object.keys(bnb).sort().join(", "));
	});
});
