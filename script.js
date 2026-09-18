// ======================================================
// NSWPF — SYDNEY ROLEPLAY
// CALLSIGN REGISTER
// ======================================================


// ======================================================
// CALLSIGN DATA
// ======================================================

const callsigns = [

    // --------------------------------------------------
    // COMMISSIONER
    // --------------------------------------------------

    {
        callsign: "COP1",
        position: "Commissioner",
        assignedTo: "1165409380334846066",
        status: "Assigned"
    },


    // --------------------------------------------------
    // DEPUTY COMMISSIONER
    // --------------------------------------------------

    {
        callsign: "DCOP1",
        position: "Deputy Commissioner",
        assignedTo: "1362935644464222213",
        status: "Assigned"
    },

    {
        callsign: "DCOP2",
        position: "Deputy Commissioner",
        assignedTo: "1490490122498740255",
        status: "Assigned"
    },

    {
        callsign: "DCOP3",
        position: "Deputy Commissioner",
        assignedTo: "1484740687781036123",
        status: "Assigned"
    },


    // --------------------------------------------------
    // ASSISTANT COMMISSIONER
    // --------------------------------------------------

    {
        callsign: "ACOP1",
        position: "Assistant Commissioner",
        assignedTo: "N/A",
        status: "Available"
    },

    {
        callsign: "ACOP2",
        position: "Assistant Commissioner",
        assignedTo: "N/A",
        status: "Available"
    },

    {
        callsign: "ACOP3",
        position: "Assistant Commissioner",
        assignedTo: "N/A",
        status: "Available"
    },

    {
        callsign: "ACOP4",
        position: "Assistant Commissioner",
        assignedTo: "N/A",
        status: "Available"
    },


    // ==================================================
    // SC-1
    // CHIEF SUPERINTENDENT
    // ==================================================

    {
        callsign: "SC-1",
        position: "Chief Superintendent",
        assignedTo: "1070600181671788594",
        status: "Assigned"
    }

];


// ======================================================
// SC-2 — SC-3
// SUPERINTENDENT
// ======================================================

for (let i = 2; i <= 3; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Superintendent",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-4
// CHIEF INSPECTOR
// ======================================================

callsigns.push({

    callsign: "SC-4",

    position: "Chief Inspector",

    assignedTo: "N/A",

    status: "Available"

});


// ======================================================
// SC-5 — SC-7
// INSPECTOR
// ======================================================

for (let i = 5; i <= 7; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Inspector",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-8 — SC-12
// SENIOR SERGEANT
// ======================================================

for (let i = 8; i <= 12; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Senior Sergeant",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-13 — SC-15
// INCREMENTAL SERGEANT
// ======================================================

for (let i = 13; i <= 15; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Incremental Sergeant",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-16 — SC-21
// SERGEANT
// ======================================================

for (let i = 16; i <= 21; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Sergeant",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-22 — SC-24
// LEADING SENIOR CONSTABLE
// ======================================================

for (let i = 22; i <= 24; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Leading Senior Constable",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-25 — SC-27
// INCREMENTAL SENIOR CONSTABLE
// ======================================================

for (let i = 25; i <= 27; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Incremental Senior Constable",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-28 — SC-32
// SENIOR CONSTABLE
// ======================================================

for (let i = 28; i <= 32; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Senior Constable",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-33 — SC-70
// CONSTABLE
// ======================================================

for (let i = 33; i <= 70; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Constable",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// SC-71 — SC-120
// PROBATIONARY CONSTABLE
// ======================================================

for (let i = 71; i <= 120; i++) {

    callsigns.push({

        callsign: `SC-${i}`,

        position: "Probationary Constable",

        assignedTo: "N/A",

        status: "Available"

    });

}


// ======================================================
// DISPLAY CALLSIGNS
// ======================================================

function displayCallsigns() {

    const table =
        document.getElementById("callsignTable");

    const count =
        document.getElementById("resultsCount");

    const noResults =
        document.getElementById("noResults");


    if (!table) {

        console.error(
            "NSWPF: callsignTable element not found."
        );

        return;

    }


    // --------------------------------------------------
    // GET FILTER VALUES
    // --------------------------------------------------

    const searchInput =
        document.getElementById("callsignSearch");

    const positionInput =
        document.getElementById("divisionFilter");

    const statusInput =
        document.getElementById("statusFilter");


    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const selectedPosition =
        positionInput
            ? positionInput.value
            : "all";


    const selectedStatus =
        statusInput
            ? statusInput.value
            : "all";


    // --------------------------------------------------
    // FILTER DATA
    // --------------------------------------------------

    const filteredCallsigns =
        callsigns.filter(call => {


            const matchesSearch =

                call.callsign
                    .toLowerCase()
                    .includes(search)

                ||

                call.position
                    .toLowerCase()
                    .includes(search)

                ||

                call.assignedTo
                    .toLowerCase()
                    .includes(search);


            const matchesPosition =

                selectedPosition === "all"

                ||

                call.position === selectedPosition;


            const matchesStatus =

                selectedStatus === "all"

                ||

                call.status === selectedStatus;


            return (
                matchesSearch &&
                matchesPosition &&
                matchesStatus
            );

        });


    // --------------------------------------------------
    // CLEAR TABLE
    // --------------------------------------------------

    table.innerHTML = "";


    // --------------------------------------------------
    // UPDATE COUNT
    // --------------------------------------------------

    if (count) {

        count.textContent =
            filteredCallsigns.length;

    }


    // --------------------------------------------------
    // NO RESULTS
    // --------------------------------------------------

    if (filteredCallsigns.length === 0) {

        if (noResults) {

            noResults.style.display =
                "block";

        }

        return;

    }


    if (noResults) {

        noResults.style.display =
            "none";

    }


    // --------------------------------------------------
    // CREATE TABLE ROWS
    // --------------------------------------------------

    filteredCallsigns.forEach(call => {


        const row =
            document.createElement("tr");


        // CALLSIGN
        const callsignCell =
            document.createElement("td");


        callsignCell.innerHTML = `
            <strong class="callsign-name">
                ${call.callsign}
            </strong>
        `;


        // POSITION
        const positionCell =
            document.createElement("td");


        positionCell.textContent =
            call.position;


        // ASSIGNED TO
        const assignedCell =
            document.createElement("td");


        if (call.assignedTo === "N/A") {

            assignedCell.innerHTML = `
                <span class="assigned-na">
                    N/A
                </span>
            `;

        } else {

            assignedCell.innerHTML = `
                <span class="discord-id">
                    ${call.assignedTo}
                </span>
            `;

        }


        // STATUS
        const statusCell =
            document.createElement("td");


        if (call.status === "Assigned") {

            statusCell.innerHTML = `
                <span class="status status-active">
                    <span class="status-dot"></span>
                    Assigned
                </span>
            `;

        } else {

            statusCell.innerHTML = `
                <span class="status status-available">
                    <span class="status-dot"></span>
                    Available
                </span>
            `;

        }


        // ADD CELLS
        row.appendChild(callsignCell);

        row.appendChild(positionCell);

        row.appendChild(assignedCell);

        row.appendChild(statusCell);


        // ADD ROW
        table.appendChild(row);

    });

}


// ======================================================
// RESET FILTERS
// ======================================================

function resetCallsignFilters() {

    const search =
        document.getElementById("callsignSearch");

    const position =
        document.getElementById("divisionFilter");

    const status =
        document.getElementById("statusFilter");


    if (search) {

        search.value = "";

    }


    if (position) {

        position.value = "all";

    }


    if (status) {

        status.value = "all";

    }


    displayCallsigns();

}


// ======================================================
// MOBILE NAVIGATION
// ======================================================

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");


    if (!nav) return;


    nav.classList.toggle("open");

}


// ======================================================
// INITIALISE WEBSITE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "NSWPF Callsign System Loaded."
        );


        console.log(
            `Total callsigns: ${callsigns.length}`
        );


        // Initial display
        displayCallsigns();


        // ------------------------------------------------
        // SEARCH
        // ------------------------------------------------

        const search =
            document.getElementById(
                "callsignSearch"
            );


        if (search) {

            search.addEventListener(
                "input",
                displayCallsigns
            );

        }


        // ------------------------------------------------
        // POSITION FILTER
        // ------------------------------------------------

        const position =
            document.getElementById(
                "divisionFilter"
            );


        if (position) {

            position.addEventListener(
                "change",
                displayCallsigns
            );

        }


        // ------------------------------------------------
        // STATUS FILTER
        // ------------------------------------------------

        const status =
            document.getElementById(
                "statusFilter"
            );


        if (status) {

            status.addEventListener(
                "change",
                displayCallsigns
            );

        }


        // ------------------------------------------------
        // RESET BUTTON
        // ------------------------------------------------

        const reset =
            document.getElementById(
                "resetFilters"
            );


        if (reset) {

            reset.addEventListener(
                "click",
                resetCallsignFilters
            );

        }

    }
);