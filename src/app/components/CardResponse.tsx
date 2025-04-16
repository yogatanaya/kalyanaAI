'use client'
import React from 'react';

type CardResponseProps = {
	paramAnswer: string
}

import { formatAnswer } from '@/app/utils/formatAnswer';

function CardResponse({ paramAnswer }: CardResponseProps) {
	return (
		<div className='row justify-content-center align-items-center mt-4'>
			<div className='col-md-8'>
				<div className='card shadow shadow-md'>
					<div className='card-body'>
						<div
						dangerouslySetInnerHTML={{ __html: formatAnswer(paramAnswer) ?? '' }}
						/>
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default CardResponse
