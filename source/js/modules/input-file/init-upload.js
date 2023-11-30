import {Upload} from './upload.js';

const uploadFileDropBlocks = document.querySelectorAll('[data-upload="file-drop"]');

export const initUpload = () => {
  if (!uploadFileDropBlocks.length) {
    return;
  }

  uploadFileDropBlocks.forEach((item) => {
    new Upload(item, {
      uploadLength: 5,
      dropZone: true,
      maxFileSize: 10485760,
      accept: ['.pdf', '.docx', '.xlsx', 'doc', 'rtf', 'xls', 'zip', 'rar', 'jpg', 'png'],
      iconFormat: {
        xlsx: './img/file/icon-file-xlsx.png',
        docx: './img/file/icon-file-docx.png',
        pdf: './img/file/icon-file-pdf.png',
        default: './img/file/icon-file-docx.png',
      },
      fileInfo: {
        fileName: true,
        fileSize: true,
      },
      // emptyMessage: 'Добавление файла обязательно',
      errorMessage: 'Выделенные файлы превышают максимальный размер в 10 Мегабайт',
    });
  })
}
