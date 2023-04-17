import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import { Header } from './components/Header/Header';
import { Home } from './pages';
import { Login } from './pages';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div
          style={{
            backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICAgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPScxNDQzJyBoZWlnaHQ9JzUwNicgdmlld0JveD0nMCAwIDE0NDMgNTA2Jz4gIDxkZWZzPiAgICA8cGF0aCBpZD0nYScgZD0nTTAgMGgxNDQwdjUwMEgweicvPiAgPC9kZWZzPiAgPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gICAgPG1hc2sgaWQ9J2MnIGZpbGw9JyNmZmYnPiAgICAgIDx1c2UgeGxpbms6aHJlZj0nI2EnLz4gICAgPC9tYXNrPiAgICA8dXNlIGZpbGw9JyMwMDFFNjInIHhsaW5rOmhyZWY9JyNhJy8+ICAgIDxnIG1hc2s9J3VybCgjYyknPiAgICAgIDxwYXRoIGZpbGw9JyNGRjgwOEInIGQ9J00wIDU2NC43MzZoMTI2NlYtMzg0SDB6Jy8+ICAgICAgPHBhdGggZmlsbD0nIzAwMUU2MicgZD0nTTEwMjguMDE0LTM4NGMuNjM3IDguODU3LTkuOTU3IDE0My4xNTQtNzMuMTM4IDMwNi43MTZDODc3LjA0OCAxMjQuMTk0IDc4NC4yNzQgMzkzLjI3IDc2OC4xMTUgNTY1SDEyNjh2LTk0OWgtMjM5Ljk4NicvPiAgICAgIDxwYXRoIGZpbGw9JyNGRjVDMzknIGQ9J002My44MDktMjQyLjAwNUM1Mi4zNTktMjIxLjYzOSAyNi42NjYtMTg5LjA3OSAwLTE1Ni41MXY0ODUuODQ3YzcyLjMxMyAzNy42NTIgMTk0LjEzNCA3Ny4yNCAzNjIuNDAyIDYwLjg2MyA4MC42MjQtNy44NDUgMjQ4Ljc2NS00OS4zMjggMzQzLjYxMS0yNzguNTY4Qzc2Ny41MTYtMzcuMDQgODIzLjUyNS0zNzIuNjg1IDgyNC0zODRIOTkuMjQ0YzQuOTY1IDI0LjUwOC0xMS42NTIgOTkuNjgxLTM1LjQzNSAxNDEuOTk1Jy8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=)`,
          }}>
          <Search />
        </div>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </Provider>
    </>
  );
}

export default App;
