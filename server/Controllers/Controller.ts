import { Router } from "express";

export interface IController{
   Router():Router
   Pathname: string
}