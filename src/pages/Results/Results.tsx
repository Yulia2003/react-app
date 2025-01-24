import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Results.module.css';
import { getDestId, fetchHotels } from '../../api/bookingApi';

interface Hotel {
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  roomDetails: string;
  price: number;
  currency: string;
  checkin_time: string;
  checkout_time: string;
  additional_details: string;
  photos: string[];
}

interface QueryParams {
  destination: string | null;
  checkin: string | null;
  checkout: string | null;
  adults: string | null;
}

interface HotelResponse {
  property: {
    name: string;
    priceBreakdown: {
      grossPrice: {
        value: number;
        currency: string;
      };
      excludedPrice: {
        value: number;
      };
    };
    checkin: {
      fromTime: string;
      untilTime: string;
    };
    checkout: {
      fromTime: string;
      untilTime: string;
    };
    photoUrls: string[];
  };
  accessibilityLabel: string;
}

const Results: React.FC = () => {
  const { search } = useLocation();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState<boolean>(false);

  const getQueryParams = (): QueryParams => {
    const urlParams = new URLSearchParams(search);
    const destination = urlParams.get('destination');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const adults = urlParams.get('adults');
    return { destination, checkin, checkout, adults };
  };

  useEffect(() => {
    const { destination, checkin, checkout, adults } = getQueryParams();

    if (!destination || !checkin || !checkout || !adults) return;

    const fetchHotelsData = async () => {
      setLoading(true);
      try {
        const destId = await getDestId(destination!);
        if (destId) {
          const data = await fetchHotels(destId, checkin!, checkout!, adults!);
          if (data.status && data.data && data.data.hotels) {
            const hotelsData = data.data.hotels.map((hotel: HotelResponse) => {
              const labelParts = hotel.accessibilityLabel.split('\n');
              const ratingReviewParts = labelParts[1]?.split(' ') || [];
              const rating = parseFloat(ratingReviewParts[0]) || 0;
              const reviews = parseInt(ratingReviewParts.slice(-2)[0]) || 0;

              const distanceParts = labelParts[2]?.split('•')[1]?.trim().split(' ') || [];
              const distance = distanceParts.length > 1 ? distanceParts[0] : 'Нет данных';
              
              const roomDetails = labelParts[4] || '';

              return {
                name: hotel.property.name,
                rating: rating,
                reviews: reviews,
                distance: distance,
                roomDetails: roomDetails.replace(/\./g, '').replace('•', '').trim(),
                price: Math.round(hotel.property.priceBreakdown?.grossPrice?.value) || 0,
                currency: hotel.property.priceBreakdown?.grossPrice?.currency || 'N/A',
                checkin_time: hotel.property.checkin?.fromTime || 'N/A',
                checkout_time: hotel.property.checkout?.untilTime || 'N/A',
                additional_details: `Дополнительно: ${Math.round(hotel.property.priceBreakdown?.grossPrice?.value)} ${hotel.property.priceBreakdown?.grossPrice?.currency} + налоги и сборы (${Math.round(hotel.property.priceBreakdown?.excludedPrice?.value)} ${hotel.property.priceBreakdown?.grossPrice?.currency}). Без предоплаты.`,
                photos: hotel.property.photoUrls || [],
              };
            });
            setHotels(hotelsData);
            setNoResults(false);
          } else {
            setHotels([]);
            setNoResults(true);
          }
        } else {
          setError('Не удалось найти направление');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelsData();
  }, [search]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className={styles.resultsContainer}>
      <h1>Отели в {getQueryParams().destination}</h1>
      {error && <p className={styles.error}>{error}</p>}
      {noResults ? (
        <p>Отели не найдены.</p>
      ) : (
        <div className={styles.hotelCards}>
          {hotels.map((hotel, index) => (
            <div className={styles.hotelCard} key={index}>
              {hotel.photos[0] && (
                <img
                  src={hotel.photos[0]}
                  alt={hotel.name}
                  className={styles.hotelImage}
                />
              )}
              <h3>{hotel.name}</h3>
              <p>Рейтинг: {hotel.rating} ★ ({hotel.reviews} отзывов)</p>
              <p>Расстояние от центра: {hotel.distance} км</p>
              <p>{hotel.roomDetails}</p>
              <p>Стоимость: {hotel.price} {hotel.currency}</p>
              <p>Заезд: {hotel.checkin_time} | Выезд: {hotel.checkout_time}</p>
              <p>{hotel.additional_details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;