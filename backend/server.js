import express from 'express';
import cors from 'cors';
import { DateTime } from 'luxon';

const app = express();
app.use(cors());
app.use(express.json());

const CITIES = [
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'Melbourne', timezone: 'Australia/Melbourne' },
  { name: 'Abu Dhabi', timezone: 'Asia/Dubai' },
  { name: 'Mykonos', timezone: 'Europe/Athens' },
  { name: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Geneva', timezone: 'Europe/Zurich' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
];

app.get('/api/cities', (req, res) => {
  const result = CITIES.map(city => ({
    name: city.name,
    timezone: city.timezone,
    localTime: DateTime.now().setZone(city.timezone).toFormat('HH:mm'),
  }));
  res.json(result);
});

app.listen(5000, () => {
  console.log('Jesko Jets API running on http://localhost:5000');
});
