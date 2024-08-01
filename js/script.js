function calculateMarks() {
    const subjects = [
        { theory: 'subject1Theory', practical: 'subject1Practical', total: 'subject1Total', words: 'subject1Words' },
        { theory: 'subject2Theory', practical: 'subject2Practical', total: 'subject2Total', words: 'subject2Words' },
        { theory: 'subject3Theory', practical: 'subject3Practical', total: 'subject3Total', words: 'subject3Words' },
        { theory: 'subject4Theory', practical: 'subject4Practical', total: 'subject4Total', words: 'subject4Words' },
        { theory: 'subject5Theory', practical: 'subject5Practical', total: 'subject5Total', words: 'subject5Words' },
        { theory: 'subject6Theory', practical: 'subject6Practical', total: 'subject6Total', words: 'subject6Words' },
        { theory: 'subject7Theory', practical: 'subject7Practical', total: 'subject7Total', words: 'subject7Words' },
        { theory: 'subject8Theory', practical: 'subject8Practical', total: 'subject8Total', words: 'subject8Words' }
    ];

    let grandTotal = 0;

    subjects.forEach(subject => {
        const theoryMarks = parseInt(document.getElementById(subject.theory).value) || 0;
        const practicalMarks = parseInt(document.getElementById(subject.practical).value) || 0;
        const totalMarks = theoryMarks + practicalMarks;

        grandTotal += totalMarks;

        document.getElementById(subject.total).innerText = totalMarks;
        document.getElementById(subject.words).innerText = numberToWords(totalMarks);
    });

    const totalInWords = numberToWords(grandTotal);
    const percentage = (grandTotal / (subjects.length * 200)) * 100;
    const grade = getGrade(percentage);

    document.getElementById('grandTotal').value = grandTotal;
    document.getElementById('totalInWords').value = totalInWords;
    document.getElementById('percentage').value = percentage.toFixed(2) + '%';
    document.getElementById('grade').value = grade;
}

function numberToWords(num) {
    // Function to convert number to words
    const a = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';
    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 === 0 ? '' : ' ' + a[num % 10]);
    if (num < 1000) return a[Math.floor(num / 100)] + ' Hundred' + (num % 100 === 0 ? '' : ' ' + numberToWords(num % 100));

    return 'Number too large';
}

function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'F';
}
