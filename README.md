# NV_Dashboard

Dashboard system for NV Lampang company. HTML-based dashboards with data visualization using Chart.js.

## Project Structure

```
NV_Dashboard/
├── shared/           # Shared CSS, JS utilities, libraries
│   ├── css/          # Common styles
│   ├── js/           # Shared JavaScript utilities
│   └── lib/          # Third-party libraries (Chart.js)
├── dashboards/       # Dashboard pages
│   ├── dashboard1/   # Individual dashboard folder
│   └── template/     # Template for creating new dashboards
├── data/             # CSV data files
└── README.md
```

## Getting Started

### Setup (First Time)

1. Clone or open this project
2. Navigate to the project folder
3. No installation required! Just open dashboard HTML files in a browser

### Creating a New Dashboard

1. Copy `dashboards/template/` to `dashboards/[new_name]/`
2. Edit `index.html` with your dashboard content
3. Place your CSV files in `data/` folder
4. Reference them in your HTML with relative paths

### Opening a Dashboard

Simply open any dashboard's `index.html` in your browser. For better local development, use a simple HTTP server:

**Option 1: Python (built-in on most systems)**
```bash
# From project root
python -m http.server 8000
# Then visit: http://localhost:8000/dashboards/dashboard1/
```

**Option 2: Node.js**
```bash
npm install -g http-server
http-server
```

## Data Format

Place CSV files in the `data/` folder. Example format:
```csv
Month,Sales,Expenses
January,5000,3000
February,6500,3200
```

## Technologies

- **Chart.js** - Data visualization library
- **HTML/CSS/JavaScript** - Dashboard markup and interactivity
- **CSV** - Data format

## Migration

This project is migration-friendly:
- All paths are relative (no hardcoded absolute paths)
- All libraries are included locally
- No dependencies beyond a web browser
- Git repository for version control

To migrate to another computer:
1. Copy entire folder to new location
2. Push/pull via git
3. Open dashboards in browser - ready to use!

## Notes

- Keep CSV files in `data/` folder for organization
- Use `shared/css/style.css` for global styling
- Use `shared/js/utils.js` for shared functions
