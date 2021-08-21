;(function ($) {

	$('.save-noteikumi-html').on('click', function (e) {
		var data = $('#noteikumi-paraugs article').html();

		saveStaticDataToFile(data, 'noteikumi.txt');
	});

	$('.save-privacy-html').on('click', function (e) {
		var data = $('#privatuma-politika article').html();

		saveStaticDataToFile(data, 'privatuma-politika.txt');
	});

	$('.generate-noteikumi').on('click', function (e) {
		e.preventDefault();

		var company = $('#company-name').val();
		var regNum = $('#reg-num').val();
		var adrese = $('#adrese').val();
		var countries = $('#countries').val();
		var workDays = $('#work-days').val();
		var withdrawalEmail = $('#withdrawal-email').val();
		var complaintEmail = $('#complaint-email').val();
		var marketingEmail = $('#marketing-email').val();

		$('#company-name-doc').html('').append(company);
		$('#reg-num-doc').html('').append(regNum);
		$('#adrese-doc').html('').append(adrese);
		$('#countries-doc').html('').append(countries);
		$('#work-days-doc').html('').append(workDays);
		$('#withdrawal-email-doc').html('').append(withdrawalEmail);
		$('#complaint-email-doc').html('').append(complaintEmail);
		$('#marketing-email-doc').html('').append(marketingEmail);

		$('#noteikumi-paraugs').show();
	});

	$('.generate-privacy').on('click', function (e) {
		e.preventDefault();

		var company = $('#company-name-p').val();
		var regNum = $('#reg-num-p').val();
		var adrese = $('#adrese-p').val();
		var shopName = $('#shop-name-p').val();
		var shopEmail = $('#shop-email-p').val();
		var shopDomain = $('#shop-domain-p').val();

		$('#company-name-doc-p').html('').append(company);
		$('#reg-num-doc-p').html('').append(regNum);
		$('.adrese-doc-p').html('').append(adrese);
		$('#shop-name-doc-p').html('').append(shopName);
		$('#shop-email-doc-p').html('').append(shopEmail);
		$('#shop-domain-doc-p').html('').append(shopDomain);

		$('#privatuma-politika').show();
	});

	$('.navbar a').on('click', function (e) {
		e.preventDefault();

		var page = $(this).data('page');

		$('.data').hide();
		$(`.${page}`).show();
	});

	$('.navbar-toggler').on('click', function (e) {
		e.preventDefault();

		var block = $(this).data('target');

		$(block).toggle();
	});

	function saveStaticDataToFile(data, fileName) {
		var blob = new Blob([data], { type: 'text/plain;charset=utf-8' });

		saveAs(blob, fileName);
	}
})(jQuery);
