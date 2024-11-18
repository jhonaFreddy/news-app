export default async function fetchByKeyword(keyword) {
    const apiKey = 'ae4feff2162e44e08e2d45a7ed79a9d1';
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Error fetching news by keyword');
    }
    const data = await response.json();
    return data.articles;
  }
  