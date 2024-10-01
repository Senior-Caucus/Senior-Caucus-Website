"use server";
import { google } from "googleapis";

const credentials = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
};

export async function getMemberData(sheetID: string) {
  const auth = await google.auth.getClient({
    credentials: credentials,
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
    credentials: credentials,
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

export async function getDeptPhoto(sheetID: string) {
  const auth = await google.auth.getClient({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = "E1";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: sheetID.trim() + "!" + range,
  });
  return response.data.values;
}

export async function getResources() {
  const auth = await google.auth.getClient({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const range = "A2:C200";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.RESOURCES_SHEET_ID,
    range: range,
  });
  return response.data.values;
}

export async function getEvents() {
  const auth = await google.auth.getClient({
    credentials: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = "A2:E200";
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.EVENTS_SHEET_ID,
    range: range,
  });``
  return response.data.values;
}
