import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Request } from "express";
import { renderRoutes } from "react-router-config";
import routes from "../../client/routes";


export default (req:Request, context={})=> renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(routes)}</div>
    </StaticRouter>
  );