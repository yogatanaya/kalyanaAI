'use client'
import { useState } from "react"
import CardResponse from "./components/CardResponse";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {

	const [question, setQuestion] = useState<string>("");
	const [answer, setAnswer] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleAsk = async () => {
		setLoading(true);

		try {
			const response = await fetch('/api/ask', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ question })
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			setAnswer(data.response || 'Terjadi kesalahan, silakan coba lagi');
			setLoading(false); 

		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	}

  return (
    <main>
			<div className="mt-4 py-8">

				<div className="d-flex justify-content-center align-items-center h-100">
					<h1>Kalyana<span style={{ fontWeight: '800', color: '#ffb3c6'}}>AI</span></h1>
				</div>
				<div className="text-center"
				>
					<i>Always in mindfullness</i>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12">
							<textarea rows={5} cols={50} placeholder="Pertanyaan untuk mulai diskusi seputar dhammapada/sutta"
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
							className="form-control"/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col-md-8">
							<button id="askButton" onClick={handleAsk} disabled={loading}
							className="btn btn-md"
							style={{ backgroundColor: '#ffb3c6' , color: 'white' }}
							>{loading ? 'KalyanaAI Menjawab....' : 'Tanya'}</button>
						</div>
					</div>
				</div>


			</div>

			{answer && (
				<CardResponse paramAnswer={answer}/>
			)}

    </main>
  )
}
