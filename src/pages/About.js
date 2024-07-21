import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Burger 33 ile en üst düzey burger lezzetini deneyimleyin. Bu ağız sulandıran lezzet, mükemmel şekilde pişirilmiş, %100 dana etinden yapılmış sulu bir köfte içerir. Üzerinde eritilmiş cheddar peyniri, çıtır marul, taze domatesler ve turşu dilimleri bulunur. Yumuşak ve kızarmış bir brioche ekmeği içinde sunulan bu burger, özel ev yapımı sosumuzla taçlandırılır. Her ısırıkta patlayan lezzetlerle sizi kendine hayran bırakacak. Öğle yemeği, akşam yemeği veya canınızın çektiği herhangi bir an için mükemmel bir seçim!</p>
            </div>
        </div>
    </div>
  )
}

export default About