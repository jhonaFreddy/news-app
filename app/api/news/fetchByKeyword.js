export default async function fetchByKeyword(keyword) {
    const apiKey = process.env.NEWS_API_KEY;
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Error fetching news by keyword');
    }
    const data = await response.json();
    return data.articles;
  }
  