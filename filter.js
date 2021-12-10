let arr = [
    {
        name: "Adam",
        activity: "Basketball",
        gender: "male"
    },
    {
        name: "Donnie",
        activity: "Baseball",
        gender: "male"
    },
    {
        name: "Jane",
        activity: "Swimming",
        gender: "female"
    },
    {
        name: "Zack",
        activity: "Running",
        gender: "male"
    },
    {
        name: "Brie",
        activity: "Lacrosse",
        gender: "female"
    }
];

console.log(arr.filter(e => e.activity == "Swimming"));
console.log(arr.filter(e => e.activity == prompt("Enter an activity: ")));
