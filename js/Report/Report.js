﻿"use strict";
var dataSet = [
    ["2016-07-01", "350", "25", "中文", "30", "300"],
    ["2016-07-02", "400", "233", "8422", "53", "170"],
    ["2016-07-03", "287", "367", "1562", "45", "86"],
    ["2016-07-04", "70", "256", "6224", "12", "433"],
    ["2016-07-05", "90", "236", "5407", "23", "162"],
    ["2016-07-06", "60", "236", "4804", "45", "372"],
    ["2016-07-07", "95", "571", "9608", "78", "137"],
    ["2016-07-08", "239", "236", "6200", "78", "327"],
    ["2016-07-09", "480", "712", "2360", "88", "205"],
    ["2016-07-10", "365", "239", "1667", "23", "103"],
    ["2016-07-11", "116", "247", "3814", "45", "90"],
    ["2016-07-12", "456", "236", "9497", "32", "342"],
    ["2016-07-13", "326", "236", "6741", "22", "470"],
    ["2016-07-14", "231", "235", "3597", "99", "313"],
    ["2016-07-15", "567", "222", "1965", "56", "385"],
    ["2016-07-16", "124", "333", "1581", "88", "198"],
    ["2016-07-17", "674", "331", "3059", "35", "725"],
    ["2016-07-18", "127", "321", "1721", "66", "237"],
    ["2016-07-19", "985", "223", "2558", "23", "132"],
    ["2016-07-20", "235", "282", "2290", "34", "217"],
    ["2016-07-21", "125", "378", "1937", "32", "345"],
    ["2016-07-22", "236", "237", "6154", "27", "675"],
    ["2016-07-23", "236", "237", "8330", "83", "106"],
    ["2016-07-24", "236", "236", "3023", "92", "85"],
    ["2016-07-25", "523", "222", "5797", "42", "120"],
    ["2016-07-26", "216", "890", "8822", "26", "925"],
    ["2016-07-27", "321", "222", "9239", "88", "350"],
    ["2016-07-28", "642", "123", "1314", "24", "200"],
    ["2016-07-29", "271", "356", "2947", "45", "850"],
    ["2016-07-30", "218", "865", "8899", "45", "160"],
    ["2016-07-31", "851", "961", "2769", "47", "950"]
];
$(document).ready(function () {
    var datatables=$('#example').DataTable({
        language:{
            "sProcessing":"处理中...",

            "sLengthMenu":"显示_MENU_项结果",

            "sZeroRecords":"没有匹配结果",

            "sInfo":"第_START_至_END_条结果，共_TOTAL_条","sInfoEmpty":"第0至0条结果，共0条",

            "sInfoFiltered":"(由_MAX_项结果过滤)",

            "sInfoPostFix":"",

            "sSearch":"搜索:",

            "sUrl":"",

            "sEmptyTable":"表中数据为空",

            "sLoadingRecords":"载入中...",

            "sInfoThousands":",",

            "oPaginate":{

                "sFirst":"首页",

                "sPrevious":"上页",

                "sNext":"下页",

                "sLast":"末页"

            },

            "oAria":{

                "sSortAscending":":以升序排列此列",

                "sSortDescending":":以降序排列此列"

            }
        },
        data: dataSet,
        columns: [
            { title: "日期" },
            { title: "起重重量&nbsp;&nbsp;(吨)" },
            { title: "运行时间&nbsp;&nbsp;(分钟)" },
            { title: "起重次数" },
            { title: "摇摆次数" },
            { title: "耗电量&nbsp;&nbsp;(度)" }
        ],
       // "bStateSave": true,
        "sScrollX": "100%",
        "bScrollCollapse": true,
        "iDisplayLength": 31,
       // "pageLength":31,
        "bLengthChange": false,
        dom: 'Bfrtip',
        buttons: [{
            extend: 'excelHtml5',
            text: '导出 Excel',
            customize: function (xlsx) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                $('row c[r^="C"]', sheet).attr('s', '2');
            }
        },
         {
             extend: 'csv',
             text: '导出 CSV',
             exportOptions: {
                 modifier: {
                     search: 'none'
                 }
             }
         },
         {
             extend: 'pdf',
             text: '导出 pdf'
         },
         {
             extend: 'print',
             text:'打印'
         }
        ]
        
    });
    
});

