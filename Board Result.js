<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boards of Intermediate and Secondary Education Sargodha</title>
</head>
<body>
    <h1>Boards of Intermediate and Secondary Education Sargodha</h1>
    <input id="rollNumber" type="number" placeholder="Enter 6-digit roll number">
    <button onclick="displayResult()">Submit</button>
    <div id="result"></div>

    <script>
        function displayResult() {
            var rollNumber = parseInt(document.getElementById('rollNumber').value);
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            let subjects = [
                { name: "English", total: 100 },
                { name: "Maths", total: 75 },
                { name: "Physics", total: 75 },
                { name: "Islamiyaat", total: 100 },
                { name: "Chemistry", total: 75 },
                { name: "Urdu", total: 100 },
                { name: "Al Quran", total: 50 },
                { name: "Computer", total: 50 }
            ];

            let studentName = "";
            let fatherName = "";
            let obtainedMarks = [];
            let centreName = "";

            // Random centres list for Sargodha
            let centres = [
                "(4101) Govt. Crescent Model Higher Secondary School Sargodha",
                "(4102) Divisional Public School Sargodha",
                "(4103) Beaconhouse School System Sargodha Campus",
                "(4104) Govt. Islamia Higher Secondary School Sargodha",
                "(4105) Govt. MC High School Sargodha",
                "(4106) The City School Sargodha Campus",
                "(4107) Govt. Comprehensive Higher Secondary School Sargodha",
                "(4108) Dar-e-Arqam School Sargodha",
                "(4109) Allied School Sargodha Campus",
                "(4110) Unique High School Sargodha"
            ];

            if (rollNumber === 741236) {
                studentName = "Muhammad CHEEMA";
                fatherName = "Nadeem Tabasum Cheema";
                centreName = "(4172) Govt. Shuhada-E-APS Memorial H/S Sargodha (Boys)";
                obtainedMarks = [98, 73, 74, 93, 70, 99, 50, 34];
            } 
            else if (rollNumber === 741573) {
                studentName = "Sheikh Muhammad Ubaid-ur-Rehman";
                fatherName = "Sheikh Muhammad Adnan";
                centreName = "(4172) Govt. Shuhada-E-APS Memorial H/S Sargodha (Boys)";
                obtainedMarks = [63, 12, 62, 46, 17, 78, 42, 43];
            } 
            else if (rollNumber >= 560000 && rollNumber <= 789213) {
                let randomNames = ["Ali Khan", "Zain Ahmed", "Bilal Hussain", "Usman Tariq", "Hamza Yousaf", "Saad Rehman"];
                let randomFathers = ["Muhammad Arif", "Tariq Mehmood", "Aslam Butt", "Yousaf Malik", "Nadeem Iqbal", "Saleem Anwar"];
                studentName = randomNames[Math.floor(Math.random() * randomNames.length)];
                fatherName = randomFathers[Math.floor(Math.random() * randomFathers.length)];
                centreName = centres[Math.floor(Math.random() * centres.length)];
                obtainedMarks = subjects.map(sub => Math.floor(Math.random() * (sub.total + 1)));
            } 
            else {
                resultDiv.innerHTML = `<p>Result not found for Roll Number: ${rollNumber}</p>`;
                return;
            }

            // Student info
            resultDiv.innerHTML += `<p>Name: ${studentName}<br>Father's Name: ${fatherName}<br>Centre Name: ${centreName}<br>Student Roll Number: ${rollNumber}</p>`;
            resultDiv.innerHTML += `<p>Results:</p>`;

            // Table header
            let tableHTML = `
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        <th>Grade</th>
                    </tr>
            `;

            function getGrade(obt, total) {
                let percentage = (obt / total) * 100;
                if (percentage >= 90) return "A+";
                if (percentage >= 80) return "A";
                if (percentage >= 70) return "B";
                if (percentage >= 60) return "C";
                if (percentage >= 50) return "D";
                return "F";
            }

            let totalMarks = 0;
            let totalObtained = 0;
            let fails = 0;

            subjects.forEach((sub, index) => {
                let obt = obtainedMarks[index];
                let grade = getGrade(obt, sub.total);
                if (grade === "F") fails++;
                totalMarks += sub.total;
                totalObtained += obt;
                tableHTML += `
                    <tr>
                        <td>${sub.name}</td>
                        <td>${sub.total}</td>
                        <td>${obt}</td>
                        <td>${grade}</td>
                    </tr>
                `;
            });

            tableHTML += "</table>";
            resultDiv.innerHTML += tableHTML;

            // Final result logic
            if (rollNumber === 741236) {
                resultDiv.innerHTML += `<p>${totalMarks} / ${totalObtained}</p><p>Pass</p>`;
            } 
            else if (rollNumber === 741573) {
                resultDiv.innerHTML += `<p>${totalMarks} / ${totalObtained}</p><p>Pass with 2 supply's</p>`;
            } 
            else {
                let finalStatus = fails >= 3 ? "Fail" : "Pass";
                resultDiv.innerHTML += `<p>${totalMarks} / ${totalObtained}</p><p>${finalStatus}</p>`;
            }

            document.getElementById('rollNumber').style.display = 'none';
            document.querySelector('button').style.display = 'none';
        }
    </script>
</body>
</html>


