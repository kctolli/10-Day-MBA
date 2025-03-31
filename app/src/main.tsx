import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx';
import Components from './components/main.ts';

import './index.css';

const { Days, Podcasts } = Components;

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route index element={<App />}/>
        <Route path='podcasts' element={<Podcasts />}/>
        <Route path='day1' element={<Days.Day1 />} />
        <Route path='day2' element={<Days.Day2 />} />
        <Route path='day3' element={<Days.Day3 />} />
        <Route path='day4' element={<Days.Day4 />} />
        <Route path='day5' element={<Days.Day5 />} />
        <Route path='day6' element={<Days.Day6 />} />
        <Route path='day7' element={<Days.Day7 />} />
        <Route path='day8' element={<Days.Day8 />} />
        <Route path='day9' element={<Days.Day9 />} />
        <Route path='day10' element={<Days.Day10 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
