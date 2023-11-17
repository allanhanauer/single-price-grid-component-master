import "./App.css";

function App() {
  return (
    <>
      <header></header>
      <main>
        <section className="join">
          <h2 id="joinTitle">Join our community</h2>
          <p id="joinDesc">30-day, hassle-free money back guarantee</p>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about
            honingtheir skills.
          </p>
        </section>
        <section className="month">
          <h3>Monthly Subscription</h3>
          <section id="priceInfo">
          <section className="price">
            <h2>{"\u0024"}29</h2>
            <p>per month</p>
          </section>
          <p>Full access for less than {"\u0024"}1 a day</p>
          </section>
          <button id="signUp">Sign Up</button>
        </section>
        <section className="why">
          <h2>Why Us</h2>
          <p>
            Tutorials by industry experts Peer &amp; expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </section>
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
