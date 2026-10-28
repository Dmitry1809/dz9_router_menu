import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <article className="article">
      <h1 className="article__title">404 - Страница не найдена</h1>
      <p className="article__paragraph">Похоже, вы свернули не на тот трек.</p>
      <Link to="/" className="menu__item" style={{ display: 'inline-block', backgroundColor: '#333' }}>
        На главную
      </Link>
    </article>
  );
}
