"use server";
import { google } from "googleapis";

export async function getMemberData(sheetID: string) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = "A2:D200";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID, 
    range: sheetID.trim() + "!" + range,
  });
  return response.data.values;
}


export async function getNamefromAA(sheetID: string) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = "A1";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID, 
    range: sheetID.trim() + "!" + range,
  });
  return response.data.values;
}