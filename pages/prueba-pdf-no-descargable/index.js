import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const index = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(2);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<Document
				file="/assets/archivos/Malla-curricular-2013-ciencias-biológicas.pdf"
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
};

export default index;
