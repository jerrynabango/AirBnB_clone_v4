$(function () {
	const airb = {};
	const bnb = $(".amenities h4");
	const status = $("div#api_s");
  
	$("li input[type=checkbox]").change(function () {
	  this.checked ? airb[this.dataset.n] = this.dataset.i : delete airb[this.dataset.n];
	  bnb.text(Object.keys(airb).sort().join(", "));
	});
  
	$.getJSON("http://0.0.0.0:5001/api/v1/status/", (d) => {
	  status.toggleClass("av", d.s === "OK");
	});
  });
