// (function () {
//     // INITIALIZATION OF CLIPBOARD
//     HSCore.components.HSClipboard.init('.js-clipboard');

//     let searchAttributes = {
//         'name': 'title',
//         'img': 'img',
//         'rate': 'rate',
//         'address': 'address',
//         'link': 'link',
//         'group': 'group',
//         'groupid': 'groupid',
//         'website': 'website',
//         'is_verified': 'is_checked',
//         'desc': 'desc',
//         'reputation': 'reputation'
//     }

//     etherSearchInit({
//         id: 'search-panel',
//         attributes: searchAttributes
//     });
// })();

// var sid = '1c819e3c675b63d73a43de3e60dd2b29';
//         var strGlobal = getCookie("etherscan_switch_age_datetime");
//         var strGlobalFee = sessionStorage.getItem("ShowFee");
//         var cookieconsent = getCookie("etherscan_cookieconsent");


//         if (cookieconsent !== "True") {
//             document.getElementById("divcookie").style.display = "block";
//         };


//         function getCookie(cname) {
//             var name = cname + "=";
//             var ca = document.cookie.split(';');
//             for (var i = 0; i < ca.length; i++) {
//                 var c = ca[i];
//                 while (c.charAt(0) === ' ') {
//                     c = c.substring(1);
//                 }
//                 if (c.indexOf(name) === 0) {
//                     return c.substring(name.length, c.length);
//                 }
//             }
//             return "";
//         }

//         $("#btnCookie").click(function () {
//             $("#divcookie").fadeOut("slow", function () {
//                 var d = new Date();
//                 d.setTime(d.getTime() + (1095 * 24 * 60 * 60 * 1000));
//                 var expires = "expires=" + d.toUTCString();
//                 document.cookie = "etherscan_cookieconsent=True" + ";" + expires + ";path=/";;
//             });
//         });

        // function handleSearchText(data) {
        //     searchAddress = false;
        //     if ($("search-panel").val() == "") {
        //         $("#hdnSearchText").val("");
        //         $("#hdnSearchLabel").val("");
        //     }
        // }

        // function writeCookie(key, value, days) {
        //     var date = new Date();
        //     days = days || 365;
        //     date.setTime(+ date + (days * 86400000));
        //     window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
        //     return value;
        // }

        // function setThemeMode(mode) {
        //     writeCookie('displaymode', mode);
        // }

        var lang_miner = "Fee Recipient";
        var lang_mined_by = "Mined by";
        var lang_block = "Block";
        var lang_block_reward = "Block Reward";
        var lang_sec = "sec";
        var lang_secs = "secs";
        var lang_min = "min";
        var lang_mins = "mins";
        var lang_from = "From";
        var lang_to = "To";
        var lang_amount = "Amount";
        var lang_tx = "Tx";
        var lang_bk = "Bk";
        var lang_ether = "Eth";
        var lang_txns = "txns";
        var lang_in_X = "in";
        var lang_ago = "ago";
        var lang_secs_ago = "less than 1 sec ago";
        var lang_sec_ago = "sec ago";
        var lang_sec_in = "";

        // $(function () {
        //     $('#container-1').highcharts({
        //         chart: {
        //             spacingTop: 10,
        //             spacingBottom: 0,
        //             spacingLeft: 0,
        //             spacingRight: 10,
        //         },

        //         title: {
        //             text: '',
        //             align: 'left',
        //         },

        //         xAxis: {
        //             title: { text: '' },
        //             lineWidth: 0,
        //             minorTickLength: 0,
        //             tickLength: 0,
        //             labels: {
        //                 step: 7,
        //             },
        //             categories: [
        //                 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24',
        //             ]
        //         },

        //         yAxis: {
        //             labels: {
        //                 enabled: true
        //             },
        //             gridLineWidth: 0,
        //             title: {
        //                 text: null
        //             }
        //         },

        //         legend: {
        //             enabled: false
        //         },

        //         credits: {
        //             enabled: false
        //         },

        //         tooltip: {
        //             formatter: function () {
        //                 return '<span style="font-size:10px">' + this.point.friendlydate + '</span><br><table class="text-dark"><tr><td style="padding:0">' +
        //                     '<span class="text-dark">Transactions: </a></span><b>' + this.point.formattedValue + '</b><br>' +
        //                     '<br>' + 'Price: ' + this.point.price + ''
        //                 '</td></tr></table>';
        //             }
        //         },

        //         accessibility: {
        //             enabled: false
        //         },

        //         plotOptions: {
        //             series: {
        //                 color: '#1e2022',
        //                 enableMouseTracking: true,
        //                 lineWidth: 1,
        //                 shadow: false,
        //                 animation: false,
        //                 cursor: 'pointer',
        //                 states: {
        //                     hover: {
        //                         lineWidth: 1
        //                     }
        //                 },
        //                 marker: {
        //                     radius: 0
        //                 },
        //                 point: {
        //                     events: {
        //                         select: function (e) {
        //                             location.href = 'txs?dt=' + this.options.dt;
        //                         }
        //                     }
        //                 }
        //             },
        //             column: {
        //                 pointPadding: 0.1,
        //                 borderWidth: 0
        //             }
        //         },

        //         series: [{
        //             name: 'Transactions',
        //             type: 'spline',
        //             data: [{ y: 1016480, dt: '1681084800', formattedValue: '1,016,480', friendlydate: 'Monday, April 10, 2023', price: '$1,911.12' }, { y: 1084502, dt: '1681171200', formattedValue: '1,084,502', friendlydate: 'Tuesday, April 11, 2023', price: '$1,891.58' }, { y: 1021632, dt: '1681257600', formattedValue: '1,021,632', friendlydate: 'Wednesday, April 12, 2023', price: '$1,918.78' }, { y: 1094764, dt: '1681344000', formattedValue: '1,094,764', friendlydate: 'Thursday, April 13, 2023', price: '$2,013.84' }, { y: 1166392, dt: '1681430400', formattedValue: '1,166,392', friendlydate: 'Friday, April 14, 2023', price: '$2,101.61' }, { y: 1056292, dt: '1681516800', formattedValue: '1,056,292', friendlydate: 'Saturday, April 15, 2023', price: '$2,092.42' }, { y: 854249, dt: '1681603200', formattedValue: '854,249', friendlydate: 'Sunday, April 16, 2023', price: '$2,120.19' }, { y: 1011979, dt: '1681689600', formattedValue: '1,011,979', friendlydate: 'Monday, April 17, 2023', price: '$2,075.87' }, { y: 1070108, dt: '1681776000', formattedValue: '1,070,108', friendlydate: 'Tuesday, April 18, 2023', price: '$2,104.28' }, { y: 1085066, dt: '1681862400', formattedValue: '1,085,066', friendlydate: 'Wednesday, April 19, 2023', price: '$1,936.48' }, { y: 1073576, dt: '1681948800', formattedValue: '1,073,576', friendlydate: 'Thursday, April 20, 2023', price: '$1,943.17' }, { y: 1009840, dt: '1682035200', formattedValue: '1,009,840', friendlydate: 'Friday, April 21, 2023', price: '$1,849.16' }, { y: 862010, dt: '1682121600', formattedValue: '862,010', friendlydate: 'Saturday, April 22, 2023', price: '$1,874.46' }, { y: 867666, dt: '1682208000', formattedValue: '867,666', friendlydate: 'Sunday, April 23, 2023', price: '$1,862.42' }, { y: 940804, dt: '1682294400', formattedValue: '940,804', friendlydate: 'Monday, April 24, 2023', price: '$1,842.51' },],
        //             allowPointSelect: true,
        //             pointStart: 0
        //         }]
        //     });
        // });

        // function setFocus() {
        //     if (window.innerWidth > 600)
        //         $("input[name=q]").focus();
        // }
        // $(document).ready(function () {
        //     //setFocus();
        // });