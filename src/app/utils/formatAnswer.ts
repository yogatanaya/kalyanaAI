import React from 'react'

export function formatAnswer(answer: string) {

	if (!answer) return null;

	let formatted = answer;

	 // Ganti heading ### jadi h3
	 formatted = formatted.replace(/^### (.*)$/gm, `<h3>$1</h3>`);

	 // Ganti subheading markdown (####) jadi h4
	 formatted = formatted.replace(/^#### (.*)$/gm, `<h4>$1</h4>`);
 
	 // Ganti dash list jadi <ul><li>
	 formatted = formatted.replace(/(?:^|\n)- (.*?)(?=\n|$)/g, `<li>$1</li>`);
	 formatted = `<ul>${formatted}</ul>`; // wrap semua list (basic)
 
	 // Ganti kutipan > jadi blockquote
	 formatted = formatted.replace(/^> (.*)$/gm, `<blockquote>$1</blockquote>`);
 
	 // Pali word marker seperti (Samacitta) → kasih class pali
	 formatted = formatted.replace(/\b([A-Z][a-z]+citta|Majjhima Patipadā|Dhamma|Sutta|Sīla|Anattā|Samādhi|Nibbāna)\b/g, `<span class="pali">$1</span>`);
 
	 // Clean karakter aneh
	 formatted = formatted.replace(/[^\x00-\x7F]+/g, ""); // optional, clean corrupted chars

	return formatted;
}
