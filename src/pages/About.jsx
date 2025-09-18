import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <main>
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        quibusdam accusantium expedita animi atque molestias corrupti officia
        neque qui amet, nulla cumque ad voluptas ut voluptatum recusandae libero
        eum magni quam suscipit molestiae similique, facere unde fuga? Ex animi
        aperiam eaque nisi culpa ipsum quibusdam, consequatur repellat porro
        saepe repellendus obcaecati tempore necessitatibus architecto expedita
        voluptas dolorum earum. Quaerat iste consequatur architecto quod, quidem
        ducimus in esse repellendus alias accusantium aperiam nostrum vel quis
        iusto facilis. Est mollitia tenetur accusamus assumenda, eveniet
        perferendis voluptatum repellat molestiae vel ducimus? Officiis veniam
        sunt eos eum illum. Blanditiis nihil accusantium debitis necessitatibus
        quibusdam.
      </p>

      <ul>
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}
