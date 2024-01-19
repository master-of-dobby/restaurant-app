
fetch("http://localhost:8000/api/restaurants/")
.then((res) => res.json())
.then((restaurants) => console.log(restaurants));