#!/usr/bin/env python3
import openpyxl
import csv
import sys

excel_file = "C:/Users/USER/Documents/ClaudeProjectHub/NV_Dashboard/data/price_comparison_20260520_143642.xlsx"
csv_file = "C:/Users/USER/Documents/ClaudeProjectHub/NV_Dashboard/data/price_comparison_20260520_143642.csv"

try:
    wb = openpyxl.load_workbook(excel_file, data_only=True)
    ws = wb['Summary']

    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        for row in ws.iter_rows(values_only=True):
            writer.writerow(row)

    print(f"✅ CSV created: {csv_file}")
    sys.exit(0)
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
