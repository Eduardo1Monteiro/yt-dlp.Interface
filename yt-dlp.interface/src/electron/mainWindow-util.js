async function getData(searchElement = "") {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=10&regionCode=BR&key=${apiKey}`;
  if (searchElement.trim() !== "") {
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(searchElement)}&maxResults=10&key=${apiKey}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.error("Fetch error:", e);
  }
}
export default getData;
