$( document ).ready(function () {
    const amenitiesDic = {};
    $("INPUT:checkbox").change(function () {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');
        if (this.checked) {
            amenitiesDic[amenityId] = amenityName;
        } else {
            delete amenitiesDic[amenityId];
        }
        if (Object.values(amenitiesDic).length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(Object.values(amenitiesDic).join(', '));
        }
    });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function(response, status) {
  if (status === 'success') {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
  }
)};
