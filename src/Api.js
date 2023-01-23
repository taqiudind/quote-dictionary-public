import axios from "axios";

export async function GetQuote() {
  const api1 = await axios.get(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    {
      headers: {
        "X-RapidAPI-Key": "b97d95007emsh70d49d9e5d9380ap14f3c9jsn7ce68a6ff011",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    }
  );
  return api1.data;
}

export async function GetUrban(inputValue) {
  const api2 = await axios.get(
    "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    {
      params: { term: inputValue },
      headers: {
        "X-RapidAPI-Key": "b97d95007emsh70d49d9e5d9380ap14f3c9jsn7ce68a6ff011",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    }
  );
  return api2.data.list;
}
