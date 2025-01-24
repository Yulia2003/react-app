const API_KEY = 'a40bedffdcmsh7e0e6f060ebccaap1b0025jsna5859498e368';
const API_HOST = 'booking-com15.p.rapidapi.com';

export const getDestId = async (cityName: string) => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${cityName}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    });
    const data = await response.json();
    if (data.status && data.data) {
      return data.data[0].dest_id;
    }
  } catch (error) {
    throw new Error('Failed to fetch destination information');
  }
  return null;
};

export const fetchHotels = async (destId: string, checkin: string, checkout: string, adults: string) => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${destId}&search_type=CITY&arrival_date=${checkin}&departure_date=${checkout}&adults=${adults}&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=ru&currency_code=RUB`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch hotels');
  }
};