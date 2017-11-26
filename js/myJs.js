function Crime(id, numberPlate, typeOfTransport, typeOfCrime, date, location, image) {
    this.id = id;
    this.numberPlate = numberPlate;
    this.typeOfTransport = typeOfTransport;
    this.typeOfCrime = typeOfCrime;
    this.date = date;
    this.location = location;
    this.image = image;
}

function generateData() {
    var crimes = [];
    crime = new Crime(1, "61F1-07838", "Xe Máy", "Vượt đèn đỏ", "25/11/2017", "Đại lộ Võ Văn Kiệt", "1.jpg");
    crimes.push(crime);
    crime1 = new Crime(2, "61F1-90857", "Ô Tô", "Vượt đèn đỏ", "25/11/2017", "Đại lộ Hùng Vương", "2.jpg");
    crimes.push(crime1);
    crime2 = new Crime(3, "61F1-59310", "Xe Máy", "Không xi nhan", "24/11/2017", "Cách mạng tháng 8", "3.jpg");
    crimes.push(crime2);
    crime3 = new Crime(4, "61C4-80957", "Xe Máy", "Lấn làn", "24/11/2017", "Đường Huỳnh Văn Lũy", "9.jpg");
    crimes.push(crime3);
    crime4 = new Crime(5, "61F2-07830", "Ô Tô", "Không đội mũ", "24/11/2017", "Đường Yersin", "311.jpg");
    crimes.push(crime4);
    crime5 = new Crime(6, "60B9-20983", "Xe Máy", "Vượt đèn đỏ", "23/11/2017", "Đại lộ Võ Văn Kiệt", "311_alpr.jpg");
    crimes.push(crime5);
    crime6 = new Crime(7, "68F1-12345", "Ô Tô", "Vượt đèn đỏ", "23/11/2017", "Đường Nam Kỳ Khời Nghĩa", "391.jpg");
    crimes.push(crime6);
    crime7 = new Crime(8, "60C1-09090", "Xe Máy", "Lấn làn", "22/11/2017", "Đại lộ Nam Giang", "980.jpg");
    crimes.push(crime7);
    crime8 = new Crime(9, "61F1-50606", "Xe Máy", "Lấn làn", "22/11/2017", "Đường Nam Kỳ Khời Nghĩa", "1015.jpg");
    crimes.push(crime8);
    crime9 = new Crime(10, "61G1-22850", "Xe Máy", "Vượt đèn đỏ", "21/11/2017", "Đường 30 Tháng 4", "1572.jpg");
    crimes.push(crime9);
    crime10 = new Crime(11, "61K1-17748", "Xe Máy", "Không bật đèn", "21/11/2017", "Đại lộ Võ Văn Kiệt", "1301.jpg");
    crimes.push(crime10);
    crime11 = new Crime(12, "61F1-98623", "Ô Tô", "Vượt đèn đỏ", "20/11/2017", "Đường Huỳnh Văn Lũy", "3153.jpg");
    crimes.push(crime11);
    return crimes;
}

function addDataToView() {
    var crimes = generateData();
    for (var i = 0; i < crimes.length; i++) {
        document.getElementById('body').innerHTML +=
            '<tr class="tableBody"' + `onclick=detail(${crimes[i].id})` + ">" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].id + "</td>" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].numberPlate + "</td>" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].typeOfTransport + "</td>" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].typeOfCrime + "</td>" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].date + "</td>" +
            '<td class="center" style="padding-top: 40px">' + crimes[i].location + "</td>" +
            '<td class="center">' + `<img src="images/${crimes[i].image}" class="photo">` + "</td>" +
            "</tr>";
    }
}

function detail(id) {
    window.location = 'detail.html';
    localStorage.setItem("idDetail", id);
}

function generateDetail() {
    var crimes = generateData();
    var id = localStorage.getItem("idDetail")
    document.getElementById("demo").innerHTML = crimes[id - 1].typeOfCrime
    document.getElementById("dateAndTime").innerHTML = crimes[id - 1].date
    document.getElementById("location").innerHTML = crimes[id - 1].location
    document.getElementById("typeOfTransport").innerHTML = crimes[id - 1].typeOfTransport
    document.getElementById("numberPlate").innerHTML = crimes[id - 1].numberPlate
}
generateDetail();