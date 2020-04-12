import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const pdf = (dataId) => {
  const doc = new jsPDF();
  const date = new Date().toUTCString();
  doc.autoTable({
    html: dataId,
  });
  doc.save(`${date}.pdf`);
};
