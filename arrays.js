let arr = [1,2,3,4];

arr.forEach((value) => {
    console.log(value);
});

arr = arr.map((value) => value * 2);

const isEven = (value) => value % 2 === 0;

const evenValues = arr.filter((value) => isEven(value));
