import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import booksData from './data/books.json';
import ThemeContext from './ThemeContext';

// Mock della funzione fetch globale per i test dei commenti
global.fetch = jest.fn();

// Funzione helper per simulare una risposta fetch di successo
function mockFetchSuccess(data) {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data)
  });
}

beforeEach(() => {
  // Reset del mock di fetch prima di ogni test
  fetch.mockClear();
});

test("1. Verifica che il componente Welcome venga montato correttamente", () => {
  render(
      <App />
  );

  const welcomeEl = screen.getByTestId("welcome-text");
  expect(welcomeEl).toBeInTheDocument();
});

test("2. Renderizza una card per ogni libro nel json", () => {
  render(
  <MemoryRouter>
  <Home theme="light" searchQuery="" />
  </MemoryRouter>
  );

  const expectedCards = 
    booksData.fantasy.length +
    booksData.horror.length +
    booksData.romance.length +
    booksData.history.length;

  const cards = screen.getAllByTestId("book-card");
  expect(cards.length).toBe(expectedCards); 
});

test("3. Verifica che il componente CommentArea venga renderizzato correttamente", () => {
  render(
    <MemoryRouter>
      <Home theme="light" searchQuery="" />
    </MemoryRouter>
  );
  const commentArea = screen.getByTestId("comment-area");
  expect(commentArea).toBeInTheDocument();
});

test("4. Filtra i libri in base all'input di ricerca nella barra di ricerca", async () => {
  render(<App />);

  const searchInput = screen.getByPlaceholderText("Browse our books..");
  const searchTerm = "Tarzan:";

  await userEvent.clear(searchInput);
  await userEvent.type(searchInput, searchTerm);

 const expectedCount =
    booksData.fantasy.concat(
      booksData.horror,
      booksData.history,
      booksData.romance
    ).filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;

  const visibleCards = screen.getAllByTestId("book-card");
  expect(visibleCards.length).toBe(expectedCount);
});

test("5. Verifica che cliccando sul libro il bordo camboi colore", () => {
  render(
    <MemoryRouter>
    <Home theme="light" searchQuery="" />
    </MemoryRouter>
  );

  const covers = screen.getAllByTestId("book-cover");
  const firstCover = covers[0];

  fireEvent.click(firstCover);

  const cards = screen.getAllByTestId("book-card");
  const firstCard = cards[0];

  expect(firstCard.className).toMatch(/border/);
});

test("6. Solo un libro alla volta può avere il bordo selezionato", () => {
  render(
    <MemoryRouter>
      <Home theme="light" searchQuery="" />
    </MemoryRouter>
  );

  let cards = screen.getAllByTestId("book-card");

  const firstCard = cards[0];
  const secondCard = cards[1];

  fireEvent.click(firstCard);
  cards = screen.getAllByTestId("book-card");

  expect(cards[0].className).toMatch(/border/);
  expect(cards[1].className).not.toMatch(/border/);

  fireEvent.click(cards[1]);

  cards = screen.getAllByTestId("book-card");

  expect(cards[1].className).toMatch(/border/);
  expect(cards[0].className).not.toMatch(/border/);
});

test("7. Nessun commento mostrato se nessun libro è selezionato", () => {
  render(
    <MemoryRouter>
      <Home theme="light" searchQuery="" />
    </MemoryRouter>
  );

  const commentElements = screen.queryAllByTestId("single-comment");
  expect(commentElements.length).toBe(0);
});


test("8. Mostra i commenti quando si seleziona un libro che ha commenti", async () => {
  
  const mockComments = [
    { _id: '1', author: 'Mario', comment: 'Ottimo libro!' },
    { _id: '2', author: 'Giulia', comment: 'Uno dei miei preferiti.' }
  ];

  fetch.mockImplementation((url) => {
    if (url.includes('/comments')) {
      return mockFetchSuccess(mockComments);
    }
    return mockFetchSuccess([]);
  });

  jest.useFakeTimers();

  render(
    <MemoryRouter>
      <Home theme="light" searchQuery="" />
    </MemoryRouter>
  );

  const cards = screen.getAllByTestId("book-card");
  fireEvent.click(cards[0]);

  expect(fetch).toHaveBeenCalled();
  
  await act(async () => {
    jest.advanceTimersByTime(400);
  });

  await waitFor(() => {
    const commentElements = screen.getAllByTestId("single-comment");
    expect(commentElements.length).toBe(2);
  });

  jest.useRealTimers();
});
