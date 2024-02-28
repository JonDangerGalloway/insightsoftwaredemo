// Pre-load Hover Images

$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

// Computer Image Change on hover

$(".services").on("mouseover", function () {
  let newImage = this.id;
  $(".comp").attr("src", "images/" + newImage + ".webp");
});

// Computer default image on no hover

$(".service-btns").on("mouseleave", function () {
  $(".comp").attr("src", "images/main-computer.webp");
});

// Solutions Section Change on click

$(".manual-nav").on("click", function () {
  let clickedID = this.id;
  $(".manual-nav").css("color", "#fff");
  $("#" + clickedID).css("color", "#31ab46");
  $(".slide").css("display", "none");
  $("." + clickedID).css("display", "flex");
});

// Demo Page Conditional Dropdowns

$(document).ready(function () {
  var firstDropdown = $("#first-dropdown");
  var secondDropdown = $("#second-dropdown");

  var options = {
    deltek: [
      "--Financial System Version--",
      "Deltek Ajera",
      "Deltek ComputerEase",
      "Deltek CostPoint",
      "Deltek Maconomy",
      "Deltek VantagePoint",
      "Deltek Vision",
      "Deltek Vision Cloud",
    ],
    epicor: [
      "--Financial System Version--",
      "Epicor Avante",
      "Epicor BisTrack",
      "Epicor CMS",
      "Epicor Enterprise",
      "Epicor SLS",
      "Epicor iScala",
      "Epicor Kinetic",
      "Epicor LumberTrack",
      "Epicor Manage 2000",
      "Epicor Prophet 21",
      "Epicor Tropos",
    ],
    infor: [
      "--Financial System Version--",
      "Infor CloudSuite Financials",
      "Infor Distribution SX.e",
      "Infor Financials & Supply Management",
      "Infor Lawson",
      "Infor M3",
      "Infor System21",
      "Infor SyteLine",
    ],
    jdedwards: [""],
    microsoft: [
      "--Financial System Version--",
      "Dynamics 365 Business Central",
      "Dynamics 365 Finance and Supply Chain Management",
      "Dynamics AX",
      "Dynamics CRM",
      "Dynamics GP",
      "Dynamics NAV",
      "Dynamics SL",
      "SQL Server Analysis Services (SSAS)",
    ],
    mrisoftware: [
      "--Financial System Version--",
      "MRI Commercial Management",
      "MRI Financials",
      "MRI Horizon",
      "MRI Horizon CRE",
      "MRI Qube Horizon",
      "MRI Residential Management",
    ],
    netsuite: [""],
    oracle: [
      "--Financial System Version--",
      "Oracle E-Business Suite (EBS)",
      "Oracle EPM Cloud",
      "Oracle Essbase",
      "Oracle Financial Consolidation and Close (FCCS)",
      "Oracle Fusion",
      "Oracle Hyuperion Enterprise",
      "Oracle Hyperion Financial Management (HFM)",
      "Oracle Hyperion Planning",
      "Oracle PeopleSoft",
      "Oracle Planning and Budgeting Cloud Service (PBCS)",
      "Oracle Tax Reporting",
    ],
    other: [""],
    sage: [
      "--Financial System Version--",
      "Sage 100",
      "Sage 100 Contractor",
      "Sage 200",
      "Sage 300",
      "Sage 300 CRE (Timberline)",
      "Sage 500",
      "Sage 50cloud Accounting",
      "Sage AccPac",
      "Sage Adonix Tolas",
      "Sage Estimating",
      "Sage Intacct",
      "Sage Intacct Budgeting & Planning",
      "Sage MAS",
      "Sage X3",
    ],
    sap: [
      "--Financial System Version--",
      "SAP BPC (HANA< MS or Netweaaver)",
      "SAP Business ByDesign",
      "SAP Business One (B1)",
      "SAP Business Warehouse (BW)",
      "SAP ERP",
      "SAP ERP Central Component (ECC)",
      "SAP S/4HANA",
    ],
    syspro: [""],
    viewpoint: [
      "--Financial System Version--",
      "Viewpoint Spectrum",
      "Viewpoint Vista",
    ],
  };

  firstDropdown.change(function () {
    // Clear current options in second dropdown
    secondDropdown.empty();

    // Get the selected option
    var selectedOption = $(this).val();

    // Check if selected option is 'jdedwards', 'netsuite', 'other', or 'syspro'
    if (["jdedwards", "netsuite", "other", "syspro"].includes(selectedOption)) {
      // If true, hide the second dropdown
      secondDropdown.hide();
    } else {
      // Otherwise, show the second dropdown and populate it
      secondDropdown.show(); // This will revert back to default display

      // Populate the second dropdown based on the first dropdown selection
      options[selectedOption].forEach(function (item) {
        secondDropdown.append(
          $("<option>", {
            value: item.toLowerCase(),
            text: item,
          })
        );
      });
    }
  });
});

// Show Paywall

$(document).ready(() => {
  setTimeout(() => {
    $(".paywall-container").css("display", "flex");
  }, "1000");
});

// Close Paywall (Switched to href in the a tag)

// $(".x").on("click", ()=> {
//   $(".paywall-container").css("display", "none");
//   console.log("Test")
// });
