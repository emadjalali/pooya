export default function Ul(){
    return(
        <div className='brandfor font-semibold'>
			<ul style={{marginRight:"10px"}}>
				<li className='hover:text-orange-600  branditem '>
					برندینگ برای معماران
				</li>
				<li className='hover:text-orange-600  branditem  '>
					برندینگ برای سازندگان
				</li>
				<li className='hover:text-orange-600  branditem  '>
					برندینگ برای تامین‌کنندگان
				</li>
				<li className='hover:text-orange-600  branditem  '>
					رندینگ ساختمان
				</li>
				<li className='hover:text-orange-600  branditem  '>
					برندینگ شهری
				</li>
			</ul>
            <style jsx>{`
                .brandfor {
					position: relative;
					transition: opacity 0.2s ease-in-out, visibility 0.2s;
					background-color: #0e0a0a;
					color: white;
				}
                @media screen and (min-width: 768px) {
                    .brandfor {
						position: absolute;
						display: inherit;
						opacity: 0;
						visibility: hidden;
						width: 350%;
						top: 100%;
						background-color: white;
						color: #0e0a0a;
						padding-top: 10px;
						padding-bottom: 10px;
						padding-right: 10px;
						text-align: right;
					}
                }
            `}</style>
		</div> 
    )
}