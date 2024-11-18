export default async function fetchByCategory(category) {
    const apiKey = 'ae4feff2162e44e08e2d45a7ed79a9d1';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    console.log(apiKey)
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
  