import { useParams } from "react-router-dom";
import {getProductsId} from './../../src/services/fakeAPI'


export default function ProductsDetails() {
  const { productId } = useParams();
  //   const params = useParams();
  const product = getProductsId(productId);

  //? useParams(); - Повертає об'єкт з усіма динамічними параметрами, які є в поточному URL. Ім'я параметра буде ім'ям властивості в об'єкті, а його поточне значення в адресі - значенням властивості.

  //   console.log(params);

  return (
    <main>
      <h1>ProductsDetails</h1>
      <h2>
        Product - {product.name} - {productId}
      </h2>

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
    </main>
  );
}
