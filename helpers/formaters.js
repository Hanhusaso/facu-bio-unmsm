function wrapInParagraphAndItalicize(text) {
	// Replace "_" characters with <i></i> tags
	let modifiedText = text.replace(/_(.*?)_/g, '<i>$1</i>');

	// Wrap the resulting text in <p></p> tags
	return `<span>${modifiedText}</span>`;
}

export default wrapInParagraphAndItalicize;
