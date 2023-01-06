
let Students = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

// console.log(Students.sort());

console.log(Students.sort(function(a,b){
  if ((a.biology+a.chemistry) > (b.biology+b.chemistry))
  return -1;
  else if ((a.biology+a.chemistry) < (b.biology+b.chemistry))
  return 1;
  else if ((a.biology+a.chemistry) == (b.biology+b.chemistry)){
      if (a.biology>b.biology)
      return -1;
      else if (a.biology<b.biology)
      return 1;
      else if (a.biology == b.biology){
          if ((a.biology == b.biology) & (a.chemistry == b.biology) & (a.dob == b.dob)) {
              return 0;
          };
      };

  };
}));