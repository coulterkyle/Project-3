// import Checkout from './index'

const Home = () => {
  return (
    <div className="container">
      Home Page
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Home;
