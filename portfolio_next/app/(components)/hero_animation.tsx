import "./hero_animation_Style.css";

function Hero_animation() {
  const count_div = 15;

  return (
    <>
      <div className="container_animation_hero">
        {Array.from({ length: count_div }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
      <div className="container_animation_hero2">
        {Array.from({ length: count_div }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </>
  );
}

export default Hero_animation;
