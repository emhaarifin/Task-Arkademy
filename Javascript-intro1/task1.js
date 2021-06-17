// Task 1 Buat Biodata
let biodata = {
    name: "Muhammad Arifin",
    age: 19,
    hobbies: [
        "Membaca",
        "Karawitan"
    ],
    isMaried: false,
    schoolList: [
        {
            name: "MI Salafiyah Asy-Syafi'iyah",
            yearIn: 2008,
            yearOut: 2014,
            major: null
        },
        {
            name: "SMP Negeri 1 Jatirogo",
            yearIn: 2014,
            yearOut: 2017,
            major: null
        },
        {
            name: "SMA Negeri Jatirogo",
            yearIn: 2017,
            yearOut: 2020,
            major: "IPA"
        }
    ],
    skills: [
        {
            skillName: "UX Design",
            level: "Beginner",
        },
        {
            skillName: "Web Developer",
            level: "Beginner"
        }
    ],
    insterestInCoding: true
};

console.log(biodata);