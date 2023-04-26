import { Request, Response } from "express";
import { createDay, enterTips, enterMissedE, clearCounts } from "../use-cases";

const createDayController = async(req: Request, res: Response) => {
    try {
        const date: string = req.body.date;
        const isDay: boolean = req.body.isDay;
        const day = await createDay(date, isDay);
        res.status(200).json({ day });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const updateTipsController = async(req: Request, res: Response) => {
    try {
        const date: string = req.body.date;
        const tips = req.body.tips;
        const cc = req.body.cc;
        const isDay: boolean = req.body.isDay;
        const day = await enterTips(date, tips, cc, isDay);
        res.status(200).json({ day });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const enterMissedEController = async (req: Request, res: Response) => {
    try {
        const date: string = req.body.date;
        const ccAdmin = req.body.ccAdmin;
        const cc = req.body.cc;
        const isDay: boolean = req.body.isDay;
        const done = await enterMissedE(date, ccAdmin, cc, isDay);
        done 
            ? res.status(200).json({ message: "done" })
            : res.status(500).json({ message: "error" })
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const clearCountsController = async (req: Request, res: Response) => {
    try {
        const ccAdmin = req.body.ccAdmin;
        const done = await clearCounts(ccAdmin);
        done 
            ? res.status(200).json({ message: "done" })
            : res.status(500).json({ message: "error" })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export {
    createDayController,
    updateTipsController,
    enterMissedEController,
    clearCountsController,
}