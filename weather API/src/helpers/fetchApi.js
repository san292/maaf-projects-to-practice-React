export const fetchApi = async (city, country) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a708f1d9506a77935e7217e5e8155697`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
