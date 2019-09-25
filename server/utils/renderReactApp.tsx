import { readFileSync } from "fs";
import AppRenderedToString from "./AppRenderedToString";
import { Helmet, HelmetData } from 'react-helmet';
import { Request } from "express";
const helmet:HelmetData = Helmet.renderStatic();

const renderReactApp = (req: Request) => readFileSync('./public/index.html' , 'utf8')
        .replace('__APP__', AppRenderedToString(req))
        .replace('HELMET-META', helmet.meta.toString())
        .replace('HELMET-TITLE', helmet.title.toString())
        .replace('HELMET-BODY-ATTRIBUTES', helmet.bodyAttributes.toString());

export default renderReactApp;