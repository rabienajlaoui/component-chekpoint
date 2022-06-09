import { render } from "@testing-library/react";

 export const Photo = () => (
    /*   <img src="" style={{ width: 250, height: 180 }} /> */
    <img src={`${process.env.PUBLIC_URL}./assets/Php.jpg`} className="card-img-top" alt="pic" style={{ width: 285, height: 300}} ></img>
  );


 