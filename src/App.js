
import './App.css';
import Home from './page/Home';
function App() {
  window.addEventListener('DOMContentLoaded', setup);
  function setup() {
    const options = {
      rootMargin: '0px 0px -200px 0px'
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        } else { return; }
      })
    }, options);
    const h1Group = document.querySelectorAll('h1');
    h1Group.forEach(h1 => observer.observe(h1));
    const pGroup = document.querySelectorAll('p');
    pGroup.forEach(p => observer.observe(p));
    const divGroup = document.querySelectorAll('.move');
    divGroup.forEach(p => observer.observe(p));
  }
  return (
    <>
      <Home />
    </>
  );
}

export default App;
