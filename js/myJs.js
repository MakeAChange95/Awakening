function Crime(id, numberPlate, typeOfTransport, typeOfCrime, date, location, image, image2, video, idCrime) {
    this.id = id;
    this.numberPlate = numberPlate;
    this.typeOfTransport = typeOfTransport;
    this.typeOfCrime = typeOfCrime;
    this.date = date;
    this.location = location;
    this.image = image;
    this.image2 = image2;
    this.video = video;
    this.idCrime = idCrime;
}

function generateData() {
    var crimes = [];
    crime = new Crime(1, "61F1-07838", "Xe Máy", "Vượt đèn đỏ", "25/11/2017", "Đại lộ Võ Văn Kiệt", "1.jpg", "1.2.jpg", "1.3.mp4", 1);
    crimes.push(crime);
    crime1 = new Crime(2, "61F1-90857", "Ô Tô", "Vượt đèn đỏ", "25/11/2017", "Đại lộ Hùng Vương", "2.jpg", "2.2.jpg", "2.3.mp4", 1);
    crimes.push(crime1);
    crime2 = new Crime(3, "61F1-59310", "Xe Máy", "Không xi nhan", "24/11/2017", "Cách mạng tháng 8", "3.jpg", "3.2.jpg", "3.3.mp4", 3);
    crimes.push(crime2);
    crime3 = new Crime(4, "61C4-80957", "Xe Máy", "Lấn làn", "24/11/2017", "Đường Huỳnh Văn Lũy", "9.jpg", "4.2.jpg", "4.3.mp4", 2);
    crimes.push(crime3);
    crime4 = new Crime(5, "61F2-07830", "Ô Tô", "Không đội mũ", "24/11/2017", "Đường Yersin", "311.jpg", "5.2.jpg", "5.3.mp4", 5);
    crimes.push(crime4);
    crime5 = new Crime(6, "60B9-20983", "Xe Máy", "Vượt đèn đỏ", "23/11/2017", "Đại lộ Võ Văn Kiệt", "311_alpr.jpg", "6.2.jpg", "6.3.mp4", 1);
    crimes.push(crime5);
    crime6 = new Crime(7, "68F1-12345", "Ô Tô", "Vượt đèn đỏ", "23/11/2017", "Đường Nam Kỳ Khời Nghĩa", "391.jpg", "7.2.jpg", "7.3.mp4", 1);
    crimes.push(crime6);
    crime7 = new Crime(8, "60C1-09090", "Xe Máy", "Lấn làn", "22/11/2017", "Đại lộ Nam Giang", "980.jpg", "8.2.jpg", "8.3.mp4", 2);
    crimes.push(crime7);
    crime8 = new Crime(9, "61F1-50606", "Xe Máy", "Lấn làn", "22/11/2017", "Đường Nam Kỳ Khời Nghĩa", "1015.jpg", "9.2.jpg", "9.3.mp4", 2);
    crimes.push(crime8);
    crime9 = new Crime(10, "61G1-22850", "Xe Máy", "Vượt đèn đỏ", "21/11/2017", "Đường 30 Tháng 4", "1572.jpg", "10.2.jpg", "10.3.mp4", 1);
    crimes.push(crime9);
    crime10 = new Crime(11, "61K1-17748", "Xe Máy", "Không bật đèn", "21/11/2017", "Đại lộ Võ Văn Kiệt", "1301.jpg", "11.2.jpg", "11.3.mp4", 4);
    crimes.push(crime10);
    crime11 = new Crime(12, "61F1-98623", "Ô Tô", "Vượt đèn đỏ", "20/11/2017", "Đường Huỳnh Văn Lũy", "3153.jpg", "12.2.jpg", "12.3.mp4", 1);
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
    document.getElementById("hinhanh").innerHTML = `<img class="hinh" src="images/${crimes[id - 1].image}" />`+
    `<img class="hinh" src="images/${crimes[id - 1].image2}" />`;
    document.getElementById("video").innerHTML = `<video controls src="${crimes[id - 1].video}" width="560" height="315"></video>`
    
}
function statistics() {
    var crimesStatistics = generateData();
    var vuotdendo = 0;
    var lanlan = 0;
    var khongxinhan = 0;
    var khongbatden = 0;
    var khongdoimu = 0;
    for (var i = 0; i < crimesStatistics.length ; i++) {
        if (crimesStatistics[i].idCrime == 1) {
            vuotdendo++;
        }else if (crimesStatistics[i].idCrime == 2) {
            lanlan++;
        }else if (crimesStatistics[i].idCrime == 3) {
            khongxinhan++;
        }else if (crimesStatistics[i].idCrime == 4) {
            khongbatden++;
        }else{
            khongdoimu++;
        }
    }
    var sum = vuotdendo+lanlan+khongxinhan+khongbatden+khongdoimu;
    vuotdendo = Math.round(vuotdendo/sum*100);
    lanlan = Math.round(lanlan/sum*100,-1);
    khongxinhan = Math.round(khongxinhan/sum*100);
    khongbatden = Math.round(khongbatden/sum*100);
    khongdoimu = Math.round(khongdoimu/sum*100);
    document.getElementById('bodyCount').innerHTML += 
    `<tr><td>1</td><td>Vượt đèn đỏ</td><td>${vuotdendo}%</td></tr>`+
    `<tr><td>2</td><td>Lấn làn</td><td>${lanlan}%</td></tr>`+
    `<tr><td>3</td><td>Không xi nhan</td><td>${khongxinhan}%</td></tr>`+
    `<tr><td>4</td><td>Không bật đèn</td><td>${khongbatden}%</td></tr>`+
    `<tr><td>5</td><td>Không đội mũ</td><td>${khongdoimu}%</td></tr>`
}