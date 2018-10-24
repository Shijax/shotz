import locationsComponent from "../components/locationsComponent.js"

$("#search").submit(function(event) {
    $(".form-control").blur();
    event.preventDefault();
    locationsComponent.chosenLocations($(".form-control").val());
    $('.form-control').val("");
});

$('button').on('click', (e) => {
    $('.location').show();
    const selectedBtn = $(e.target).closest('button').attr('id');
    locationsComponent.chosenTime(selectedBtn);
});