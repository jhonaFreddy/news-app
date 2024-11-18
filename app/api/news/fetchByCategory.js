export default async function fetchByCategory(category) {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  
    console.log('Fetching from URL:', url);
  
    try {
      const response = await fetch(url);
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Error fetching news by category');
      }
      const data = await response.json();
      console.log('Data received:', data);
      return data.articles;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  