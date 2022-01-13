import Exceljs from 'exceljs';

async function exportToExcel() {
    const workbook = new Exceljs.Workbook();
    const sheet = workbook.addWorksheet('sheet_devi', {
        views: [{
            showGridLines: false
        }]
    });
    sheet.addRow(["Software orders entitlement worksheet"]);
    sheet.mergeCells('A1:L1');
    sheet.getCell('A1').fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'F08080' },
    };
    await workbook.xlsx.writeFile('test_excel.xlsx');
}

await exportToExcel()