import {Link} from 'react-router-dom';

function NotFound() {
  return(
    <>
      <h2>404 你的網址錯囉</h2>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFound;