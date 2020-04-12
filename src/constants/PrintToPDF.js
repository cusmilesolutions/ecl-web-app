import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const pdf = (data) => {
  const doc = new jsPDF();
  const date = new Date().toUTCString();
  doc.autoTable({
    html: data,
  });
  doc.save(`${date}.pdf`);
};
