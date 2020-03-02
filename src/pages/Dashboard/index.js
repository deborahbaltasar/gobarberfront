import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Time } from './styles';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; 

export default function Dashboard() {
  const [ date, setDate ] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date,1))
  }

  function handleNextDay() {
    setDate(addDays(date,1))
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Deborah</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Deborah</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Deborah</span>
        </Time>
      </ul>
    </Container>
  );
}
