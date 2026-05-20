// Utility functions for dashboards

// Parse CSV string and return array of objects
function parseCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;

    const obj = {};
    const currentLine = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j] ? currentLine[j].trim() : '';
    }
    data.push(obj);
  }
  return data;
}

// Fetch and parse CSV file
async function loadCSV(filePath) {
  try {
    const response = await fetch(filePath);
    const csvString = await response.text();
    return parseCSV(csvString);
  } catch (error) {
    console.error('Error loading CSV:', error);
    return [];
  }
}

// Convert numeric string to number
function toNumber(value) {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Get unique values from array of objects
function getUniqueValues(data, key) {
  return [...new Set(data.map(item => item[key]))];
}

// Filter data by key-value pair
function filterData(data, key, value) {
  return data.filter(item => item[key] === value);
}

// Sort data by numeric key
function sortByNumber(data, key, ascending = true) {
  return data.sort((a, b) => {
    const aNum = toNumber(a[key]);
    const bNum = toNumber(b[key]);
    return ascending ? aNum - bNum : bNum - aNum;
  });
}

// Calculate sum of numeric values
function sum(data, key) {
  return data.reduce((total, item) => total + toNumber(item[key]), 0);
}

// Calculate average
function average(data, key) {
  if (data.length === 0) return 0;
  return sum(data, key) / data.length;
}

// Create HTML table from data
function createTable(data, columns = null) {
  if (data.length === 0) return '<p>No data available</p>';

  const keys = columns || Object.keys(data[0]);
  let html = '<table><thead><tr>';

  keys.forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += '</tr></thead><tbody>';

  data.forEach(row => {
    html += '<tr>';
    keys.forEach(key => {
      html += `<td>${row[key]}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  return html;
}

// Log with timestamp (helpful for debugging)
function log(message, data = null) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${message}`, data || '');
}
