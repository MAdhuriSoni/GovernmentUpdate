var members = data.results["0"].members

for (var i = 0; i < members.length; i++) {
	console.log(members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name)

	console.log(members[i].party)
	console.log(members[i].state)
	console.log(members[i].seniority)
	console.log(members[i].votes_with_party_pct + "%")
}

//var array = [members[0], members[1]]

var repCheck = document.getElementById("repCheck");
var demCheck = document.getElementById("demCheck");
var indCheck = document.getElementById("indCheck");
var myValue = document.getElementById("myValue");

repCheck.addEventListener("click", function () {
	var newArray = filterByParty();
	getTable(newArray);

})
//console.log(newArray);

demCheck.addEventListener("click", function () {
	var newArray = filterByParty();
	getTable(newArray);
})

indCheck.addEventListener("click", function () {
	var newArray = filterByParty();
	getTable(newArray);
})

myValue.addEventListener("change", function () {
	var newArray = filterByParty();
	getTable(newArray);
})


getTable(members);



function getTable(members) {

	var tbody = document.getElementById("myTable");
	tbody.innerHTML = "";
	for (i = 0; i < members.length; i++) {
		var row = document.createElement("tr");
		var cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		cell.innerHTML = name;
		var name = members[i].name;
		if (members[i].middle_name == null) {
			name = members[i].first_name + " " + members[i].last_name
		} else {
			name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
		}

		cell.innerHTML = members[i];
		cell.innerHTML = '<a href="' + members[i].url + '">' + name + '</a>';

		row.appendChild(cell)
		cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		var party = members[i].party;
		cell.innerHTML = party;
		row.appendChild(cell)


		cell = document.createElement('td')

		cell.setAttribute("class", "text-center");
		var state = members[i].state;
		cell.innerHTML = state;
		row.appendChild(cell)
		cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		var seniority = members[i].seniority;
		cell.innerHTML = seniority;
		row.appendChild(cell)

		cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		var votes_with_party_pct = members[i].votes_with_party_pct;
		cell.innerHTML = votes_with_party_pct;

		row.appendChild(cell)
		tbody.appendChild(row);
	}

	//tbody.appendChild(tbody);

}


function filterByParty() {
	var array = []
	for (var i = 0; i < members.length; i++) {
		if (members[i].state === myValue.value || myValue.value === "All") {
			if (repCheck.checked && members[i].party == "R") {
				array.push(members[i])
			}

			if (demCheck.checked && members[i].party == "D") {
				array.push(members[i])
			}


			if (indCheck.checked && members[i].party == "I") {
				array.push(members[i])
			}

			if (!repCheck.checked && !demCheck.checked && !indCheck.checked) {
				console.log("no checkboxes are selected");
				array.push(members[i])
			}
		}
	}
	return array;
	console.log(array);
}

getTable(members);

var dropdown = document.getElementById("myValue");
for (var i = 0; i < members.length; i++) {
	var option = document.createElement("option");
	option.value = members[i].state;
	option.innerHTML = members[i].state;
	dropdown.appendChild(option)
}



function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}
