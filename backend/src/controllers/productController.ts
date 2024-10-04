import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const search = req.query.search?.toString();
        console.log(search);
        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: search
                    // contains: "Blazing"
                }
            }
        })
        res.json(products);
    } catch (error) {
        res.status(500).json({message: "Error retrieving products"});
    }
};

export const createProduct = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const {productId, name, price, rating, stockQuantity} = req.body;
        const product = await prisma.products.create({
            data:{
                productId,
                name,
                price,
                rating,
                stockQuantity
            }
        })
        res.status(201).json(product);
    } catch{
        res.status(500).json({message: "Error creating product"});
    }
};