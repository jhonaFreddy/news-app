export default async function fetchWithFilters(filters) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const baseUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}`;
  
  // Construir URL con los filtros
  const queryParams = new URLSearchParams({
    q: filters.query || '',
    from: filters.from || '',
    to: filters.to || '',
    sortBy: filters.sortBy || '',
    sources: filters.sources || ''
  });

  const url = `${baseUrl}&${queryParams.toString()}`;
  console.log('Fetching URL:', url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch filtered news');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news with filters:', error);
    throw error;
  }
}
