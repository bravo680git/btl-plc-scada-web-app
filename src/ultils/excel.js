import exceljs from "exceljs";
import { saveAs } from "file-saver";

const createExcelFile = () => {
  const workbook = new exceljs.Workbook();
  workbook.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: "visible",
    },
  ];

  const sheet1 = workbook.addWorksheet("sheet1");
  sheet1.getCell("A1").value = {
    richText: [
      { text: "BÁO CÁO SẢN XUÁT MÁY IN LỤA", font: { size: 20, bold: true } },
    ],
  };
  sheet1.getRow(3).values = [
    "Stt",
    "Thời gian",
    "Số sản phẩm trên ngày",
    "Số hộp trên ngày",
    "Số  cuộn giấy",
    "Số sản phẩm trên một hộp",
  ];
  sheet1.mergeCells("A1:F1");
  sheet1.getColumn("B").width = 27;
  sheet1.getColumn("C").width = 21;
  sheet1.getColumn("D").width = 15;
  sheet1.getColumn("E").width = 15;
  sheet1.getColumn("F").width = 25;

  return workbook;
};

const saveExcelFile = async (workbook, fileName) => {
  try {
    const buffer = await workbook.xlsx.writeBuffer();
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    const fileExtension = ".xlsx";
    const blob = new Blob([buffer], { type: fileType });
    saveAs(blob, fileName + fileExtension);
  } catch (error) {
    console.log(error);
  }
};

export { createExcelFile, saveExcelFile };
