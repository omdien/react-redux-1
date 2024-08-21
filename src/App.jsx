import React from "react";
import Dashboard from "../src/pages/Dashboard";
import Products from "../src/pages/Products";
import AddProd from "./pages/AddProd";
import EditProd from "./pages/EditProd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <div className="border border-emerald-950 rounded-2xl"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero ut veniam modi maiores non facilis. Incidunt dignissimos neque, libero necessitatibus consequatur fuga voluptate nulla. Non sapiente tenetur debitis nobis incidunt unde, est quo hic odit sed natus corrupti odio, architecto aliquid repellat fugiat laudantium omnis dolor ipsa? Iure in magni magnam sed. Doloremque soluta error ratione consequatur, fugit ex, dolor quas accusantium iusto tempore, numquam autem quaerat fuga excepturi explicabo neque vitae harum repudiandae reiciendis! At, quibusdam fugiat iure modi consequuntur cupiditate, sit suscipit animi id accusantium neque eaque illo ducimus voluptatum doloribus hic nemo consectetur alias ipsa nesciunt accusamus similique, libero pariatur. Eligendi velit quos blanditiis eum! Tenetur ipsam eos eum laudantium harum? Ad itaque fugit omnis ducimus dolore laudantium natus error necessitatibus voluptates. Velit, earum optio debitis, quis quaerat ex cupiditate doloribus maiores error cumque aliquid eligendi. Corrupti repellat fugiat minima eveniet dolorum officia, a nobis nihil, sint quos cum debitis, neque amet autem ad ab necessitatibus facilis. Illum, ea. Voluptates dolores ex doloremque saepe repellat! Libero soluta officia quis, distinctio in nesciunt quasi ut quibusdam nemo delectus odit, impedit vitae et accusantium? Atque tempore aliquid quis, obcaecati aliquam eos tempora voluptate, dolorum qui possimus facilis sint deleniti! Voluptatum officiis ab autem porro, corrupti magni voluptatibus veritatis eos maxime eaque laudantium cumque optio ratione id repellendus voluptas itaque quo quibusdam. Velit, dolor pariatur eum delectus molestiae voluptatem eveniet earum, nihil asperiores atque error voluptatibus sequi et, in architecto fuga iure vero. Doloremque tempore voluptas fugiat aperiam consectetur voluptates. Repudiandae mollitia minus accusantium quibusdam facere veritatis quis, libero asperiores animi voluptate architecto ex consequatur tempore consequuntur dolores? Officia corrupti, molestias beatae quas rerum dolor exercitationem blanditiis, consequatur laborum aut architecto ipsa nulla! Quis consectetur quibusdam ex quidem possimus doloribus iure distinctio illo! Alias sunt sequi exercitationem possimus necessitatibus modi culpa ab est officiis ea maiores odit, nobis eaque veritatis incidunt quo blanditiis? Culpa, molestiae vel tempore, molestias expedita ipsa hic saepe esse quod rem, deserunt quibusdam! Modi iste consequatur doloremque nisi. Facere, distinctio natus voluptatem iste, reprehenderit dolores nostrum officiis similique nobis ratione ea ipsam consequatur tempora reiciendis ut eaque nulla recusandae? Quod vel ducimus hic officia iusto. Molestias nostrum repudiandae repellendus possimus ea eaque, animi beatae magnam dolorem voluptas iusto doloremque fugit odit assumenda quisquam! Explicabo ad modi labore architecto quaerat, dolore repellat incidunt ratione exercitationem ullam odio accusamus, obcaecati perspiciatis reprehenderit, odit culpa natus velit iste non necessitatibus? Ratione enim, eius similique consequuntur sapiente velit corporis nostrum deserunt ducimus quaerat! Sequi error doloribus, aut nostrum, quaerat harum molestiae, inventore amet commodi assumenda quo voluptatem porro earum! Quo nam autem voluptate quae pariatur rerum molestias sed delectus, minus laudantium accusantium quod perspiciatis eveniet esse neque aperiam ipsa facilis vitae id error! At voluptate natus perferendis in ex doloremque perspiciatis nobis recusandae asperiores, inventore quisquam a qui nihil ea autem rem ullam ipsa aperiam est deserunt vitae rerum? Voluptatibus inventore repudiandae repellat exercitationem esse eaque deleniti aspernatur dolorem cupiditate? Harum minus consequuntur consectetur officiis sequi perspiciatis sed libero.</p></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProd />} />
          <Route path="/products/edit/:id" element={<EditProd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
