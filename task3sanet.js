	var myObj = {
		Repblican: 0,
		Democrate: 0,
		Independents: 0,
		Total: 0,
		votes_with_party_pct: 0
	};

	var members = data.results["0"].members;
	var rep = 0;
	var dem = 0;
	var ind = 0;
	var repTotalPct = 0;
	var demTotalPct = 0;
	var indTotalPct = 0;
	var findArray = [];
	var findArray1 = [];
	var findArray2 = [];

	function numbers() {
		for (var i = 0; i < members.length; i++) {
			if (members[i].party == "R") {
				rep += 1;

				repTotalPct += members[i].votes_with_party_pct
				findArray.push(members[i].votes_with_party_pct);

			}
			if (members[i].party == "D") {
				dem += 1;
				demTotalPct += members[i].votes_with_party_pct
				findArray1.push(members[i].votes_with_party_pct);

			}

			if (members[i].party == "I") {
				ind += 1;
				indTotalPct += members[i].votes_with_party_pct;

				findArray2.push(members[i].votes_with_party_pct);
			}
			myObj.Total += 1;
			myObj.votes_with_party_pct += members[i].votes_with_party_pct;
		}


		console.log(rep);
		console.log(dem);
		console.log(ind);
		console.log(findArray);
		console.log(findArray1);
		console.log(findArray2);
		console.log(repTotalPct / rep); //find average(total of array/number of members)
		console.log(demTotalPct / dem);
		console.log(indTotalPct / ind);


		document.getElementById("test").innerHTML = rep;
		document.getElementById("test2").innerHTML = repTotalPct / rep;;

		document.getElementById("test3").innerHTML = dem;
		document.getElementById("test4").innerHTML = demTotalPct / dem;
		document.getElementById("test5").innerHTML = ind;
		if (ind == 0) {
			document.getElementById("test6").innerHTML = 0
		} else {
			document.getElementById("test6").innerHTML = indTotalPct / ind;
		}
		document.getElementById("test7").innerHTML = myObj.Total;
		document.getElementById("test8").innerHTML = myObj.votes_with_party_pct / myObj.Total;
	}
	numbers();

function Table(members) {

	var tbody = document.getElementById("myTable");
	for (i = 0; i < members.length; i++) {
		var row = document.createElement("tr");
		var cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		cell.innerHTML = name;
		var name = members[i].name;
		if (members[i].name == name) {
			name = members[i].first_name + " "
		} else {
			name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
		}

//		cell.innerHTML = members[i];
		cell.innerHTML = '<a href="' + members[i].url + '">' + name + '</a>';

		row.appendChild(cell)
		cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		var missed_votes = members[i].missed_votes;
		cell.innerHTML = missed_votes;
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

var minValue = [];
var maxValue = [];

function myFunction() {
	var percent = members.sort(function (a, b) {
		return a.votes_with_party_pct - b.votes_with_party_pct
	});
	console.log(percent);
	for (i = 0; i < percent.length; i++) {
		if (i <= percent.length * 0.1) {
			minValue.push(percent[i]);
		} else if (percent[i].votes_with_party_pct == minValue[minValue.length - 1].votes_with_party_pct) {
			minValue.push(percent[i]);
		} else {
			break;
		}


	}
	
	percent = members.sort(function (a, b) {
		return b.votes_with_party_pct - a.votes_with_party_pct
	});
	for (var y = 0; y < percent.length; y++) {
		if (y <= percent.length * 0.1) {
			maxValue.push(percent[y]);
		} else if (percent[y].votes_with_party_pct == maxValue[maxValue.length - 1].votes_with_party_pct) {
			maxValue.push(percent[y]);
		} else {
			break;
		}
	}
	//console.log(maxValue)
	//console.log(maxValue[0].party);


	//console.log(minValue);	
}

myFunction();
Table(maxValue)






function TableAttendance(members) {

	var tbody = document.getElementById("myTable2");
	//tbody.innerHTML = "";
	for (i = 0; i < members.length; i++) {
		var row = document.createElement("tr");
		var cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		cell.innerHTML = name;
		var name = members[i].name;
		if (members[i].name == name) {
			name = members[i].first_name + " "
		} else {
			name = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
		}

		cell.innerHTML = members[i];
		cell.innerHTML = '<a href="' + members[i].url + '">' + name + '</a>';

		row.appendChild(cell)
		cell = document.createElement('td')
		cell.setAttribute("class", "text-center");
		var missed_votes = members[i].missed_votes;
		cell.innerHTML = missed_votes;
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
TableAttendance(minValue)


