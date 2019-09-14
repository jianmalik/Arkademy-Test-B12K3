const biodata = () => ({
    name: "Jian Malik Hidayat",
    age: 21,
    address:
        "Jl baturaja no 16 RT/RW 001/001 ,Kel. Sukaraja , Kec. Sukaraja Selatan, Kota Prabumulih, Sumatera Selatan",
    hobbies: ["Playing And Solved Rubik", "Listen Music", "Photography"],
    is_married: false,
    list_school: [

        {
            name: "SMP Negeri 3 Prabumulih",
            year_in: 2010,
            year_out: 2013,
            major: null
        },
        {
            name: "SMK Negeri 2 Prabumulih",
            year_in: 2013,
            year_out: 2016,
            major: "Teknik Komputer Jaringan"
        },
        {
            name: "Politeknik Negeri Sriwijaya",
            year_in: 2016,
            year_out: 2019,
            major: "D3 Teknik Komputer"
        }
    ],
    skills: [
        {
            name: "Backend Developer",
            level: "Advanced"
        },
        {
            name: "Networking",
            level: "Profesional"
        },
        {
            name: "Web Developer",
            level: "Advanced"
        }
    ],
    interest_in_coding: true
});

console.log(biodata());
