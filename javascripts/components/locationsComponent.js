const writeLocations = arrayofLocations => {
    let domString = "";
    arrayofLocations.forEach(location => {
        domString += `
            <div class="location card col-md-3">
                <div class="thumbnail">
                    <img src="${location.locationImg}" alt="" width="90%">
                    <div class="caption">
                        <h3 id="thumbnail-label" class="text-center">${location.name}</h3>
                        <p><span class="address">${location.address}</span></p>
                    </div>
                    <div class="caption card-footer">
                        <p class="time text-center">${location.time}</p>
                    </div>
                </div>
            </div>
        `;
    });
    $("#locations-div").append(domString);
};

const chosenLocations = (input) => {
    let locations = $(".location")
    locations.each((i, location) => {
        $(location).not(":contains(" + input + ")").hide();
    })
}

const chosenTime = (selectedBtn) => {
    console.log(selectedBtn);
    let locations = $(".location")
    locations.each((i, location) => {
        $(location).not(":contains(" + selectedBtn + ")").hide();
    })
}

const timeColor = () => {
    let times = $(".time");
    times.each((i, time) => {
        if ($(time).html() === "Morning") {
            $(time).addClass("bg-warning")
        } else if ($(time).html()=== "Afternoon"){
            $(time).addClass("bg-primary")
        } else if ($(time).html()=== "Evening"){
            $(time).addClass("bg-success")
        } else if ($(time).html()=== "After Dark"){
            $(time).addClass("bg-secondary")
        }
    })
}

$.expr[':'].icontains = $.expr.createPseudo(function(text) {
    return function(e) {
        return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
    };
});

export default {writeLocations, chosenLocations, chosenTime}