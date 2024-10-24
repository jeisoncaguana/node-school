const fs = require('fs')
const PDFDocument = require('pdfkit')

export async function createFileInventorySheet( properties :any) {
    try {
        const { content , folder , file_name } = properties

        const doc = new PDFDocument({ margins: { top: 5, left: 5, bottom: 5, right: 5 } })
        doc.pipe(fs.createWriteStream(`${folder}/${file_name}`))

        // Header
        const headerHeight = 50
        const footerHeight = 50
        const pageHeight = doc.page.height - doc.page.margins.top - doc.page.margins.bottom

        const drawHeader = () => {
            doc.fontSize(16).text(`Toma Física ${content.Toma} ${content.Tienda}` , { align: 'center' })
            doc.moveDown()
            doc.fontSize(12).text('RESPONSABLE: __________________________________________________    DIA: __________________', { align: 'left' })
        }

        drawHeader()

        // Table positions
        const marginLeft = 5
        const marginTop = 5
        const tableTop = doc.y + 20
        const itemX = marginLeft
        const rowHeight = 20
        const colWidths = [30, 150, 70, 125, 125, 70]

        // Draw table headers with borders
        const drawTableRow = (y :any, cols :any) => {
            let x = itemX
            cols.forEach((col :any, i :any) => {
                doc.text(col, x + 2, y + 2, { width: colWidths[i] - 4, height: rowHeight - 4 })
                doc.rect(x, y, colWidths[i], rowHeight).stroke()
                x += colWidths[i]
            })
        }

        drawTableRow(tableTop, ['#', 'ITEM', 'UNIDAD', 'BODEGA', 'LINEA/BARRA/COCINA', 'TOTALIZADO'])

        // Table content
        const items = content.Articulos

        let y = tableTop + rowHeight
        items.forEach((group:any) => {
            if (y + rowHeight > pageHeight - footerHeight) {
                doc.addPage()
                y = marginTop + headerHeight
                drawHeader()
                drawTableRow(y, ['#', 'ITEM', 'UNIDAD', 'BODEGA', 'LINEA/BARRA/COCINA', 'TOTALIZADO'])
                y += rowHeight
            }

            // Draw group row
            doc.font('Helvetica-Bold').text(`GRUPO: ${group.group}`, itemX + 2, y + 2, { width: colWidths.reduce((a, b) => a + b, 0) - 4 })
            doc.rect(itemX, y, colWidths.reduce((a, b) => a + b, 0), rowHeight).stroke()
            doc.font('Helvetica')
            y += rowHeight

            group.items.forEach((item:any) => {
                if (y + rowHeight > pageHeight - footerHeight) {
                    doc.addPage()
                    y = marginTop + headerHeight
                    drawHeader()
                    drawTableRow(y, ['#', 'ITEM', 'UNIDAD', 'BODEGA', 'LINEA/BARRA/COCINA', 'TOTALIZADO'])
                    y += rowHeight
                }
                drawTableRow(y, [item.number, item.item, item.unit, '', '', ''])
                y += rowHeight
            })

            y += 10  // Additional space between groups
        })

        // Finalize PDF file
        doc.end()
        
        return 'PDF created successfully'
    } catch (error) {
        return error
    }
}

 