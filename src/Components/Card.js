import image from "../Images/image.jpg";

export const Card = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Get insights that help your business grow.</h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div>
            <div>
              <h2>10k+</h2>
              <p>COMPANIES</p>
            </div>
            <div>
              <h2>314</h2>
              <p>TEMPLATES</p>
            </div>
            <div>
              <h2>12M+</h2>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
    </section>
  );
};
