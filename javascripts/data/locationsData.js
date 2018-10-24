import locationsComponent from '../components/locationsComponent.js'

const loadLocations = () => {
$.get('../db/locations.json')
    .done(data => {
        locationsComponent.writeLocations(data.locations);
    })
    .fail(error => {
        console.log(error);
    })
};

export default {loadLocations}