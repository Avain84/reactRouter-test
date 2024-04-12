import {Link} from 'react-router-dom';

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, deserunt voluptate vel, accusantium odit aliquid aut, magnam quid</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;