import Browse from "./Browse";
import Login from "./Login";
import Player from "./Player";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },

    {
      path: "/player/:contentType/:videoId",
      element: <Player />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
