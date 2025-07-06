const Home = () => {
  return (
    <div>
      <h1>Welcome to Heart Health Info</h1>
      <p>Your heart matters. Learn how to keep it healthy.</p>
      <img 
        src="/heart1.png" 
        alt="Heart Health" 
        style={{ width: '100%', maxWidth: '500px' }}
        loading="lazy"
      />
    </div>
  );
};

export default Home;
