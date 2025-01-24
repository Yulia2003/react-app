import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import styles from './Home.module.css';
import { getDestId, fetchHotels } from '../../api/bookingApi';
import Testimonials from '../../components/Testimonials/Testimonials';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [destination, setDestination] = useState<string>('');
  const [adults, setAdults] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const [checkinDate, checkoutDate] = dateRange;

    if (!checkinDate || !checkoutDate || !destination || !adults) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    if (Number(adults) < 1) {
      alert('Количество взрослых должно быть не менее 1.');
      return;
    }

    try {
      const destId = await getDestId(destination);
      if (!destId) {
        alert('Не удалось найти пункт назначения. Попробуйте снова.');
        return;
      }

      const checkin = checkinDate.toISOString().split('T')[0];
      const checkout = checkoutDate.toISOString().split('T')[0];
      const data = await fetchHotels(destId, checkin, checkout, adults);
      console.log(data);

      navigate(`/results?destination=${destination}&checkin=${checkin}&checkout=${checkout}&adults=${adults}`);
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
      alert('Не удалось загрузить данные. Попробуйте снова.');
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className={`${styles.container} mt-5`}>
        <header className={`${styles.masthead} text-center`}>
          <h1>Добро пожаловать на наш сайт поиска отелей!</h1>
          <p>
            Планируете отпуск или деловую поездку? 
            Мы поможем вам найти лучшие предложения на отели по всему миру.
            Просто введите свои предпочтения ниже, и мы покажем вам самые выгодные варианты.
          </p>
          <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div>
              <input
                name="ss"
                className={styles.destinationField}
                placeholder="Куда вы хотите поехать?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                autoComplete="off"
                aria-label="Куда вы хотите поехать?"
              />
            </div>

            <div className={styles.datesInput}>
              <Flatpickr
                options={{
                  mode: 'range',
                  dateFormat: 'd/m/Y',
                  minDate: 'today',
                }}
                value={dateRange}
                onChange={(selectedDates) => setDateRange(selectedDates as [Date, Date])}
                placeholder="Выберите даты"
                className={styles.datePicker}
              />
            </div>

            <div>
              <input
                type="number"
                id="adults"
                name="adults"
                min="1"
                max="10"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className={styles.adultsInput}
                placeholder="Количество человек"
                title="Введите количество человек, которые будут жить в отеле"
              />
            </div>
            <div>
              <button type="submit" className={styles.searchBtn}>
                Найти
              </button>
            </div>
          </form>
        </header>
        
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;