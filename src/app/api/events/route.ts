import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    const sheets = google.sheets({
        version: 'v4',
        auth: process.env.GOOGLE_SPREADSHEET_API,
    });

    const EVENTS_SPREADSHEET_ID = "1gLCznxtir6G-MZQc7Jzk3ky2YKWR5uK7zTld0VQmUFY";
    const RANGE = "events!A2:D";

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: EVENTS_SPREADSHEET_ID,
            range: RANGE,
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) {
            return NextResponse.json({ message: 'No data found.' });
        }

        const data = rows.map(row => ({
            name: row[0],
            role: row[1],
            image: row[2],
            description: row[3],
        }));

        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to fetch data from Google Sheets', details: err }, { status: 403 });
    }
}