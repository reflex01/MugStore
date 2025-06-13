"use client";

import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const MicrosoftNumbers = () => {
  const lastUpdated = "December 6, 2024";

  const phoneNumbers = [
    {
      country: "United States",
      numbers: ["(716) 871 2781", "(888) 352 7140"],
      region: "North America"
    },
    {
      country: "United Kingdom",
      numbers: ["(44) (203) 147 4930", "(0) (800) 018 8354"],
      region: "Europe"
    },
    {
      country: "Albania",
      numbers: ["(389) (2) 30 90 890"],
      region: "Europe"
    },
    {
      country: "Algeria",
      numbers: ["(+213) (21) 89 10 70"],
      region: "Africa"
    },
    {
      country: "American Samoa",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Andorra",
      numbers: ["(33) (1) 7226 6080", "(34) (91) 114 1464"],
      region: "Europe"
    },
    {
      country: "Angola",
      numbers: ["(351) 214 154 065"],
      region: "Africa"
    },
    {
      country: "Anguilla",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 993 9301"],
      region: "North America"
    },
    {
      country: "Antarctica",
      numbers: ["(61) (2) 9870 2131"],
      region: "Antarctica"
    },
    {
      country: "Antigua and Barbuda",
      numbers: ["(305) 418 9136", "(1) (866) 993 9303"],
      region: "North America"
    },
    {
      country: "Argentina",
      numbers: ["(54) 11 5776 1000", "(0) 800 222 9467"],
      region: "South America"
    },
    {
      country: "Armenia",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Aruba",
      numbers: ["(1) (305) 603 4466"],
      region: "North America"
    },
    {
      country: "Australia",
      numbers: ["(61) (2) 9870 2131", "1800 642 008"],
      region: "Oceania"
    },
    {
      country: "Austria",
      numbers: ["(43) (1) 795 673 56", "(00) (800) 22 84 82 83"],
      region: "Europe"
    },
    {
      country: "Azerbaijan",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Bahamas, The",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 317 5700"],
      region: "North America"
    },
    {
      country: "Bahrain",
      numbers: ["(971) (4) 391 7000"],
      region: "Asia"
    },
    {
      country: "Bangladesh",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Barbados",
      numbers: ["(54) (11) 4317 2626", "(1) (800) 534 3365"],
      region: "North America"
    },
    {
      country: "Belarus",
      numbers: ["(7) (495) 745 5445", "(8) (820) 0071 0004"],
      region: "Europe"
    },
    {
      country: "Belgium",
      numbers: ["(32) (2) 401 2650", "(0) (800) 40758"],
      region: "Europe"
    },
    {
      country: "Belize",
      numbers: ["(1) (305) 603 4466"],
      region: "North America"
    },
    {
      country: "Benin",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Bermuda",
      numbers: ["(716) 871 2919", "(1) (866) 263 1098"],
      region: "North America"
    },
    {
      country: "Bhutan",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Bolivia",
      numbers: ["(800) 100 359"],
      region: "South America"
    },
    {
      country: "Bosnia and Herzegovina",
      numbers: ["(387) (33) 606 100", "(0) (800) 20 230"],
      region: "Europe"
    },
    {
      country: "Botswana",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Bouvet Island",
      numbers: ["(47) (23) 162 126"],
      region: "Antarctica"
    },
    {
      country: "Brazil",
      numbers: ["(11) 3217 3521", "(0) (800) 888 4081"],
      region: "South America"
    },
    {
      country: "British Indian Ocean Territory",
      numbers: ["(27) (11) 361 7000"],
      region: "Asia"
    },
    {
      country: "Brunei",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Bulgaria",
      numbers: ["(359) (2) 965 7100", "(0) (800) 1 5555"],
      region: "Europe"
    },
    {
      country: "Burkina Faso",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Burundi",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Cambodia",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Cameroon",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Canada",
      numbers: ["(716) 871 2781", "(888) 352 7140"],
      region: "North America"
    },
    {
      country: "Cape Verde",
      numbers: ["(351) 214 154 065"],
      region: "Africa"
    },
    {
      country: "Cayman Islands",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 263 7308"],
      region: "North America"
    },
    {
      country: "Central African Republic",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Chad",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Chile",
      numbers: ["(800) 330 600"],
      region: "South America"
    },
    {
      country: "China",
      numbers: ["(800) 830 1832"],
      region: "Asia"
    },
    {
      country: "Christmas Island",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Cocos (Keeling) Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Colombia",
      numbers: ["(01) (800) 051 0595"],
      region: "South America"
    },
    {
      country: "Comoros",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Congo (DRC)",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Cook Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Costa Rica",
      numbers: ["(0) (800) 012 1446"],
      region: "North America"
    },
    {
      country: "Côte d’Ivoire",
      numbers: ["80 00 09 99"],
      region: "Africa"
    },
    {
      country: "Croatia",
      numbers: ["(385) (1) 789 0 300", "(0) (800) 300 300"],
      region: "Europe"
    },
    {
      country: "Cyprus",
      numbers: ["(800) 90 900"],
      region: "Europe"
    },
    {
      country: "Czech Republic",
      numbers: ["(420) 225 990 844", "(0800) 100 074"],
      region: "Europe"
    },
    {
      country: "Denmark",
      numbers: ["(45) 38 487 131", "(807) 01315"],
      region: "Europe"
    },
    {
      country: "Djibouti",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Dominica",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 993 9311"],
      region: "North America"
    },
    {
      country: "Dominican Republic",
      numbers: ["(1) (888) 751 2323"],
      region: "North America"
    },
    {
      country: "Ecuador",
      numbers: ["(1) (800) 258 025"],
      region: "South America"
    },
    {
      country: "Egypt",
      numbers: ["(20) (2) 3539 3333"],
      region: "Africa"
    },
    {
      country: "El Salvador",
      numbers: ["800 7054"],
      region: "North America"
    },
    {
      country: "Equatorial Guinea",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Eritrea",
      numbers: ["(254) 20 286 8800"],
      region: "Africa"
    },
    {
      country: "Estonia",
      numbers: ["(372) 686 8820", "8002230"],
      region: "Europe"
    },
    {
      country: "Ethiopia",
      numbers: ["(254) 20 286 8800"],
      region: "Africa"
    },
    {
      country: "Falkland Islands (Islas Malvinas)",
      numbers: ["(1) (305) 603 4466"],
      region: "South America"
    },
    {
      country: "Faroe Islands",
      numbers: ["(45) 38 487 131"],
      region: "Europe"
    },
    {
      country: "Fiji Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Finland",
      numbers: ["(358) 800 118 062", "(0) (800) 770 215"],
      region: "Europe"
    },
    {
      country: "France",
      numbers: ["(33) (1) 7226 6080", "(0) (805) 110 235"],
      region: "Europe"
    },
    {
      country: "France, Metropolitan",
      numbers: ["(33) (1) 5517 4075"],
      region: "Europe"
    },
    {
      country: "French Guiana",
      numbers: ["(1) (305) 603 4466", "0800 779 809"],
      region: "South America"
    },
    {
      country: "French Polynesia",
      numbers: ["(33) (1) 7226 6080"],
      region: "Oceania"
    },
    {
      country: "French Southern and Antarctic Lands",
      numbers: ["(33) (1) 7226 6080"],
      region: "Antarctica"
    },
    {
      country: "Gabon",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Gambia",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Georgia",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Germany",
      numbers: ["(49) 89 2444 5093", "(0) (800) 284 8283"],
      region: "Europe"
    },
    {
      country: "Ghana",
      numbers: ["(44) (203) 147 4930"],
      region: "Africa"
    },
    {
      country: "Gibraltar",
      numbers: ["(44) (203) 147 4930"],
      region: "Europe"
    },
    {
      country: "Greece",
      numbers: ["(44) (870) 2411 963", "800 11 43100"],
      region: "Europe"
    },
    {
      country: "Greenland",
      numbers: ["(45) 38 487 131"],
      region: "North America"
    },
    {
      country: "Grenada",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 993 9312"],
      region: "North America"
    },
    {
      country: "Guadeloupe",
      numbers: ["(1) (305) 603 4466"],
      region: "North America"
    },
    {
      country: "Guam",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Guatemala",
      numbers: ["(1) (801) 13 00100"],
      region: "North America"
    },
    {
      country: "Guinea",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Guinea Bissau",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Guyana",
      numbers: ["(1) (305) 603 4466"],
      region: "South America"
    },
    {
      country: "Haiti",
      numbers: ["(54) (11) 4317 2626", "193 – pin 3141"],
      region: "North America"
    },
    {
      country: "Heard Island and McDonald Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Antarctica"
    },
    {
      country: "Honduras",
      numbers: ["8000 0122 – pin 5009"],
      region: "North America"
    },
    {
      country: "Hong Kong SAR",
      numbers: ["(852) 2904 2198"],
      region: "Asia"
    },
    {
      country: "Hungary",
      numbers: ["(36) (1) 267 4636", "(06) 800 18749"],
      region: "Europe"
    },
    {
      country: "Iceland",
      numbers: ["(47) (23) 162 126", "800 8236"],
      region: "Europe"
    },
    {
      country: "India",
      numbers: ["(91) 80 4010 3000", "1800 572 1100", "1800 102 1100"],
      region: "Asia"
    },
    {
      country: "Indonesia",
      numbers: ["(65) 6324 8098", "001 803 65 7668"],
      region: "Asia"
    },
    {
      country: "Iraq",
      numbers: ["(971) (4) 391 7000"],
      region: "Asia"
    },
    {
      country: "Ireland",
      numbers: ["(353) (1) 447 5390", "(1) (800) 930 031"],
      region: "Europe"
    },
    {
      country: "Israel",
      numbers: ["(44) (870) 2411 963", "(1) (800) 350 444"],
      region: "Asia"
    },
    {
      country: "Italy",
      numbers: ["(39) (02) 3604 6340", "(800) 531 042"],
      region: "Europe"
    },
    {
      country: "Jamaica",
      numbers: ["(1) (800) 647 2701"],
      region: "North America"
    },
    {
      country: "Japan",
      numbers: ["(81) (3) 6831 3460", "0120 801 734"],
      region: "Asia"
    },
    {
      country: "Jordan",
      numbers: ["(962) (6) 5503451"],
      region: "Asia"
    },
    {
      country: "Kazakhstan",
      numbers: ["(7) (727) 298 0127", "8 800 0801001"],
      region: "Asia"
    },
    {
      country: "Kenya",
      numbers: ["(254) (20) 286 8800"],
      region: "Africa"
    },
    {
      country: "Kiribati",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Korea",
      numbers: ["1577 9700", "(82) (2) 567 7881"],
      region: "Asia"
    },
    {
      country: "Kuwait",
      numbers: ["(965) 2221 9876"],
      region: "Asia"
    },
    {
      country: "Kyrgyzstan",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Laos",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Latvia",
      numbers: ["(371) (67) 852 112", "(802) 00920"],
      region: "Europe"
    },
    {
      country: "Lebanon",
      numbers: ["(961) (1) 974 035"],
      region: "Asia"
    },
    {
      country: "Lesotho",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Liberia",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Libya",
      numbers: ["(218) (21) 3330356", "(20) (2) 376 4991"],
      region: "Africa"
    },
    {
      country: "Liechtenstein",
      numbers: ["(41) (44) 580 7558"],
      region: "Europe"
    },
    {
      country: "Lithuania",
      numbers: ["(370) 520 51120", "800 22032"],
      region: "Europe"
    },
    {
      country: "Luxembourg",
      numbers: ["(33) (1) 7226 6080", "(49) 89 2444 5093", "(800) 2 99 77"],
      region: "Europe"
    },
    {
      country: "Macau SAR",
      numbers: ["(852) 2904 2198"],
      region: "Asia"
    },
    {
      country: "Macedonia",
      numbers: ["(389) (2) 3090 890"],
      region: "Europe"
    },
    {
      country: "Madagascar",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Malawi",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Malaysia",
      numbers: ["(65) 6324 8098", "00 800 2468 1668"],
      region: "Asia"
    },
    {
      country: "Maldives",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Mali",
      numbers: ["(225) 2031 0500"],
      region: "Africa"
    },
    {
      country: "Malta",
      numbers: ["(49) 2 515 003194", "(800) 65 432"],
      region: "Europe"
    },
    {
      country: "Marshall Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Martinique",
      numbers: ["(1) (305) 603 4466"],
      region: "North America"
    },
    {
      country: "Mauritania",
      numbers: ["(212) (22) 95 61 53"],
      region: "Africa"
    },
    {
      country: "Mauritius",
      numbers: ["(230) 202 8120"],
      region: "Africa"
    },
    {
      country: "Mayotte",
      numbers: ["(61) (2) 9870 2131"],
      region: "Africa"
    },
    {
      country: "Mexico",
      numbers: ["(01) (800) 527 2000"],
      region: "North America"
    },
    {
      country: "Micronesia",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Moldova",
      numbers: ["(4) (021) 203 61 53"],
      region: "Europe"
    },
    {
      country: "Monaco",
      numbers: ["(33) (1) 7226 6080", "(0) (805) 11 02 35"],
      region: "Europe"
    },
    {
      country: "Mongolia",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Montenegro",
      numbers: ["(381) (11) 3305 500"],
      region: "Europe"
    },
    {
      country: "Montserrat",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 993 9316"],
      region: "North America"
    },
    {
      country: "Morocco",
      numbers: ["(0801) 000 809"],
      region: "Africa"
    },
    {
      country: "Mozambique",
      numbers: ["(351) 214 154 065"],
      region: "Africa"
    },
    {
      country: "Myanmar",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Namibia",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Nauru",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Nepal",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Netherlands",
      numbers: ["(31) (20) 713 9240", "(0) (800) 023 3487"],
      region: "Europe"
    },
    {
      country: "Netherlands Antilles",
      numbers: ["(001) 8663 220 524"],
      region: "North America"
    },
    {
      country: "New Caledonia",
      numbers: ["(33) (1) 5517 4075"],
      region: "Oceania"
    },
    {
      country: "New Zealand",
      numbers: ["(0) (800) 676 334"],
      region: "Oceania"
    },
    {
      country: "Nicaragua",
      numbers: ["(001) (800) 220 1804"],
      region: "North America"
    },
    {
      country: "Niger",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Nigeria",
      numbers: ["(234) (1) 27 10 156"],
      region: "Africa"
    },
    {
      country: "Niue",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Norfolk Island",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Northern Mariana Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Norway",
      numbers: ["(47) 23 162 126", "(800) 56 615"],
      region: "Europe"
    },
    {
      country: "Oman",
      numbers: ["(968) 2444 6487"],
      region: "Asia"
    },
    {
      country: "Pakistan",
      numbers: ["(92) (21) 3536 9105", "(92) (30) 0070 2745", "(92) (30) 0070 2746", "(92) (30) 0070 2750"],
      region: "Asia"
    },
    {
      country: "Palestinian Authority",
      numbers: ["(962) (6) 462 6969"],
      region: "Asia"
    },
    {
      country: "Palau",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Panama",
      numbers: ["(001) (800) 507 1885"],
      region: "North America"
    },
    {
      country: "Papua New Guinea",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Paraguay",
      numbers: ["(009) (800) 542 0004"],
      region: "South America"
    },
    {
      country: "Peru",
      numbers: ["(0) (800) 51 900"],
      region: "South America"
    },
    {
      country: "Philippines",
      numbers: ["(65) 6324 8098", "00 800 2468 1668"],
      region: "Asia"
    },
    {
      country: "Pitcairn Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Poland",
      numbers: ["(48) (22) 594 19 99", "(00) (800) 121 1654"],
      region: "Europe"
    },
    {
      country: "Portugal",
      numbers: ["(351) (214) 154 065", "(800) 849 102"],
      region: "Europe"
    },
    {
      country: "Puerto Rico",
      numbers: ["(1) (866) 584 6059"],
      region: "North America"
    },
    {
      country: "Qatar",
      numbers: ["(974) 4 411 9418"],
      region: "Asia"
    },
    {
      country: "Reunion",
      numbers: ["(33) (1) 7226 6080", "0800 822 222"],
      region: "Africa"
    },
    {
      country: "Romania",
      numbers: ["(40) (21) 204 70 15", "0800 822 222"],
      region: "Europe"
    },
    {
      country: "Russia",
      numbers: ["(7) (495) 745 5445", "8 800 700 8002"],
      region: "Europe"
    },
    {
      country: "Rwanda",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Saint Helena",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Saint Kitts and Nevis",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 745 0644"],
      region: "North America"
    },
    {
      country: "Saint Lucia",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 796 2893"],
      region: "North America"
    },
    {
      country: "Saint Martin",
      numbers: ["(1) (305) 603 4466"],
      region: "North America"
    },
    {
      country: "Saint Pierre and Miquelon",
      numbers: ["(27) (11) 361 7000"],
      region: "North America"
    },
    {
      country: "Saint Vincent and the Grenadines",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 796 2899"],
      region: "North America"
    },
    {
      country: "Samoa",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "San Marino",
      numbers: ["(39) (02) 3604 6340", "(800) 531 042"],
      region: "Europe"
    },
    {
      country: "São Tomé and Príncipe",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Saudi Arabia",
      numbers: ["(966) (11) 298 8100"],
      region: "Asia"
    },
    {
      country: "Senegal",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Serbia",
      numbers: ["(381) (11) 3305 500", "(0) 700 300 300"],
      region: "Europe"
    },
    {
      country: "Seychelles",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Sierra Leone",
      numbers: ["(225) 2031 0500"],
      region: "Africa"
    },
    {
      country: "Singapore",
      numbers: ["(65) 6324 8098", "1800 324 8098"],
      region: "Asia"
    },
    {
      country: "Slovakia",
      numbers: ["(421) (2) 50 102 616", "(0) (800) 178 278"],
      region: "Europe"
    },
    {
      country: "Slovenia",
      numbers: ["(386) (1) 5853 449", "080 8028"],
      region: "Europe"
    },
    {
      country: "Solomon Islands",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Somalia",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "South Africa",
      numbers: ["(27) (11) 361 7000", "(0) (801) 43 43 43"],
      region: "Africa"
    },
    {
      country: "South Georgia and the Sandwich Islands",
      numbers: ["(54) (11) 4317 2626"],
      region: "Antarctica"
    },
    {
      country: "Spain",
      numbers: ["(34) (91) 114 1464", "(900) 150 889"],
      region: "Europe"
    },
    {
      country: "Sri Lanka",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Suriname",
      numbers: ["(1) (305) 603 4466"],
      region: "South America"
    },
    {
      country: "Svalbard and Jan Mayen Island",
      numbers: ["(47) 23 162 26"],
      region: "Europe"
    },
    {
      country: "Swaziland",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Sweden",
      numbers: ["(46) (8) 5033 4670", "020 140 00 15"],
      region: "Europe"
    },
    {
      country: "Switzerland",
      numbers: ["(41) (44) 580 7558", "(00) (800) 22848283"],
      region: "Europe"
    },
    {
      country: "Taiwan",
      numbers: ["(886) (2) 8771 7276", "00 800 2468 1668"],
      region: "Asia"
    },
    {
      country: "Tajikistan",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Tanzania",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Thailand",
      numbers: ["(65) 6324 8098", "001 800 2468 1668"],
      region: "Asia"
    },
    {
      country: "Timor-Leste",
      numbers: ["(65) 6324 8098"],
      region: "Asia"
    },
    {
      country: "Togo",
      numbers: ["(225) 20 24 24 90"],
      region: "Africa"
    },
    {
      country: "Tokelau",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Tonga",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Trinidad and Tobago",
      numbers: ["(1) (888) 801 2598"],
      region: "North America"
    },
    {
      country: "Tunisia",
      numbers: ["(216) 71 16 87 00"],
      region: "Africa"
    },
    {
      country: "Turkey",
      numbers: ["(90) (212) 33 66 999", "0800 211 3939"],
      region: "Asia"
    },
    {
      country: "Turkmenistan",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Turks and Caicos Islands",
      numbers: ["(54) (11) 4317 2626", "(1) (866) 745 7616"],
      region: "North America"
    },
    {
      country: "Tuvalu",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Uganda",
      numbers: ["(254) (20) 286 8800"],
      region: "Africa"
    },
    {
      country: "Ukraine",
      numbers: ["(380) (44) 2305102", "(0) (800) 308 8002"],
      region: "Europe"
    },
    {
      country: "United Arab Emirates",
      numbers: ["(971) (4) 391 7000"],
      region: "Asia"
    },
    {
      country: "United States Minor Outlying Islands",
      numbers: ["(65) 324 8098"],
      region: "Oceania"
    },
    {
      country: "Uruguay",
      numbers: ["(000) 4054 349"],
      region: "South America"
    },
    {
      country: "Uzbekistan",
      numbers: ["(7) (495) 745 5445"],
      region: "Asia"
    },
    {
      country: "Vanuatu",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Vatican City",
      numbers: ["(39) (02) 3604 6340", "(800) 531 042"],
      region: "Europe"
    },
    {
      country: "Venezuela",
      numbers: ["(0) (800) 642 7676"],
      region: "South America"
    },
    {
      country: "Vietnam",
      numbers: ["(84) 4 935 1053", "603 7712 4671"],
      region: "Asia"
    },
    {
      country: "Virgin Islands, British",
      numbers: ["(716) 871 2919", "(1) (866) 993 9307"],
      region: "North America"
    },
    {
      country: "Virgin Islands, U.S.",
      numbers: ["(716) 871 2919", "(1) (877) 678 8034"],
      region: "North America"
    },
    {
      country: "Wallis and Futuna",
      numbers: ["(61) (2) 9870 2131"],
      region: "Oceania"
    },
    {
      country: "Yemen",
      numbers: ["(971) (4) 391 7000"],
      region: "Asia"
    },
    {
      country: "Zambia",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    },
    {
      country: "Zimbabwe",
      numbers: ["(27) (11) 361 7000"],
      region: "Africa"
    }
];

  const regions = {
    "North America": phoneNumbers.filter(item => item.region === "North America"),
    "Europe": phoneNumbers.filter(item => item.region === "Europe"),
    "Africa": phoneNumbers.filter(item => item.region === "Africa"),
    "Oceania": phoneNumbers.filter(item => item.region === "Oceania"),
    "Caribbean": phoneNumbers.filter(item => item.region === "Caribbean"),
    "Antarctica": phoneNumbers.filter(item => item.region === "Antarctica")
  };

  return (
    <>
      <Breadcrumb title={"Microsoft Activation Phone Numbers"} pages={["microsoft-phone-numbers"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-6 via-white to-green-light-5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
              </svg>
              Global Support Numbers
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Microsoft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">Phone Numbers</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete directory of Microsoft activation phone numbers worldwide. 
              Find the right number to call for your region when activating Office or Windows by phone.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-1 px-4 py-2 rounded-lg text-sm text-gray-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: {lastUpdated}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Global Coverage</h3>
              <p className="text-gray-6 text-sm">Phone numbers for countries worldwide</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">24/7 Support</h3>
              <p className="text-gray-6 text-sm">Automated activation systems available around the clock</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Free Activation</h3>
              <p className="text-gray-6 text-sm">No additional charges for legitimate product activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Phone Numbers Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-gray-1 rounded-2xl shadow-2xl p-8 lg:p-12">
            
            {/* Important Notice */}
            <div className="bg-blue-light-6 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-dark mb-4">Important Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-2">Before You Call:</h4>
                  <ul className="space-y-1 text-gray-6 text-sm">
                    <li>• Have your Installation ID ready</li>
                    <li>• Ensure you have a valid product key</li>
                    <li>• Be near your computer</li>
                    <li>• Have a pen and paper ready</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Call Charges:</h4>
                  <ul className="space-y-1 text-gray-6 text-sm">
                    <li>• Standard call rates may apply</li>
                    <li>• Some numbers are toll-free</li>
                    <li>• Check with your phone provider</li>
                    <li>• International rates for overseas calls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phone Numbers by Region */}
            <div className="prose prose-lg max-w-none">
              {Object.entries(regions).map(([regionName, countries]) => (
                <section key={regionName} className="mb-12">
                  <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {regionName.charAt(0)}
                    </span>
                    {regionName}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {countries.map((countryData, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-light-5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-dark mb-3">{countryData.country}</h3>
                            <div className="space-y-2">
                              {countryData.numbers.map((number, numIndex) => (
                                <div key={numIndex} className="flex items-center gap-3">
                                  <a 
                                    href={`tel:${number.replace(/[^\d+]/g, '')}`}
                                    className="text-blue hover:text-blue-dark font-mono text-sm bg-blue-light-6 px-3 py-1 rounded-lg hover:bg-blue-light-5 transition-colors"
                                  >
                                    {number}
                                  </a>
                                  <button
                                    onClick={() => navigator.clipboard.writeText(number)}
                                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                                    title="Copy number"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-br from-green-light-6 to-blue-light-6 rounded-xl p-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Need Activation Help?</h3>
                <p className="text-gray-6 mb-6 max-w-2xl mx-auto">
                  If the numbers above don&apos;t work for your region or you need assistance with the activation process, 
                  our support team can provide alternative numbers and step-by-step guidance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/activate-office-by-phone" 
                    className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Activation Guide
                  </a>
                  
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrosoftNumbers;
