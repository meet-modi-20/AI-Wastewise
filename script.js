function analyzeWaste() {

    let input = document.getElementById("wasteInput").value
        .trim()
        .toLowerCase();

    let result = document.getElementById("result");

    if (input === "") {

        result.innerHTML = `
            <div class="result-placeholder">
                <div>⚠️</div>
                <h3>Please enter a waste item</h3>
                <p>Example: plastic bottle, banana peel, battery</p>
            </div>
        `;

        return;
    }


    let category = "";
    let recommendation = "";
    let tip = "";


    /* WET WASTE */

    if (
        input.includes("banana") ||
        input.includes("food") ||
        input.includes("vegetable") ||
        input.includes("fruit") ||
        input.includes("peel") ||
        input.includes("leftover")
    ) {

        category = "Wet / Organic Waste";

        recommendation =
            "Place this item in the wet or organic waste collection bin. It can be processed through composting or organic waste treatment.";

        tip =
            "Try composting suitable kitchen waste to reduce the amount sent to landfills.";
    }


    /* E-WASTE */

    else if (
        input.includes("battery") ||
        input.includes("mobile") ||
        input.includes("phone") ||
        input.includes("charger") ||
        input.includes("laptop") ||
        input.includes("computer") ||
        input.includes("earphone") ||
        input.includes("electronic")
    ) {

        category = "E-Waste";

        recommendation =
            "Do not mix this with normal household waste. Send it to an authorized e-waste collection or recycling facility.";

        tip =
            "Never throw electronic items or batteries into regular waste bins.";
    }


    /* RECYCLABLE */

    else if (
        input.includes("plastic") ||
        input.includes("bottle") ||
        input.includes("paper") ||
        input.includes("cardboard") ||
        input.includes("can") ||
        input.includes("metal") ||
        input.includes("glass")
    ) {

        category = "Dry / Recyclable Waste";

        recommendation =
            "Keep this item separate from wet waste and place it in the appropriate dry or recyclable waste collection stream.";

        tip =
            "Clean and reuse containers when possible before sending them for recycling.";
    }


    /* HAZARDOUS */

    else if (
        input.includes("chemical") ||
        input.includes("medicine") ||
        input.includes("paint") ||
        input.includes("pesticide")
    ) {

        category = "Hazardous Waste";

        recommendation =
            "Do not mix this with regular household waste. Follow local hazardous-waste disposal guidelines.";

        tip =
            "Keep hazardous materials safely separated and use an appropriate collection facility.";
    }


    /* UNKNOWN */

    else {

        category = "Needs Further Identification";

        recommendation =
            "The item could not be confidently classified from the text provided. Check your local waste-management guidelines before disposal.";

        tip =
            "When unsure, avoid mixing the item with other waste until its correct category is confirmed.";
    }


    result.innerHTML = `

        <div class="result-content">

            <h3>🤖 AI Analysis Result</h3>

            <div class="category">
                ${category}
            </div>

            <p>
                <strong>Item:</strong> ${input}
            </p>

            <p>
                <strong>Recommended Action:</strong><br>
                ${recommendation}
            </p>

            <div class="tip">
                <strong>🌱 Sustainability Tip</strong><br><br>
                ${tip}
            </div>

        </div>

    `;
}