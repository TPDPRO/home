// Import the pdf.js library


// Get the PDF document
const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
const pdfDoc = await pdfjsLib.getDocument(url).promise;

// Get the first page of the document
const page = await pdfDoc.getPage(1);

// Get the text content and item positions of the page
const content = await page.getTextContent();
const positions = await page.getTextContent({ normalizeWhitespace: true, disableCombineTextItems: true });

// Define the rules object
const rules = {};

// Create a canvas element to display the PDF
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const viewport = page.getViewport({ scale: 1.5 });
canvas.height = viewport.height;
canvas.width = viewport.width;
document.body.appendChild(canvas);

// Render the PDF on the canvas and add mouse event listeners
await page.render({ canvasContext: context, viewport }).promise;
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);

// Define the mouse event handlers
let start = null;
function handleMouseDown(event) {
  start = { x: event.clientX, y: event.clientY };
}
function handleMouseUp(event) {
  const end = { x: event.clientX, y: event.clientY };
  const selection = getSelection(start, end, positions);
  if (selection) {
    const name = prompt('Enter a name for this rule:');
    if (name) {
      rules[name] = selection;
    }
  }
}

// Define the function to get the text selection
function getSelection(start, end, positions) {
  const left = Math.min(start.x, end.x);
  const right = Math.max(start.x, end.x);
  const top = Math.min(start.y, end.y);
  const bottom = Math.max(start.y, end.y);
  const items = [];
  for (let i = 0; i < positions.items.length; i++) {
    const item = positions.items[i];
    const x = item.transform[4];
    const y = canvas.height - item.transform[5];
    if (x >= left && x <= right && y >= top && y <= bottom) {
      items.push(item);
    }
  }
  if (items.length > 0) {
    const text = items.map(item => item.str).join('');
    return text;
  }
  return null;
}
