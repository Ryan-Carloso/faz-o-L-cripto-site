'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

const translations = {
  en: {
    title: "Faz O L",
    memeText: "When the dollar hits R$6:",
    slogan: "Faz O L! 👆",
    description: "The only crypto that goes up when everything else goes down!",
    buyButton: "Buy Faz O L Now!",
    languageSwitch: "PT",
    tokenAddress: "Token Address",
    pumpButton: "Go to Pump.fun",
    howToBuy: "How to Buy",
    step1: "Create a Phantom Wallet",
    step2: "Buy some Solana w/ credit card or transfer solana",
    step3: "Click the link above and buy the token",
    step4: "Finish and Profit!",
    doubts: "If you have any doubts, ask on Telegram group",
    picanhaSectionTitle: "Picanha Promises",
    picanhaJoke2: "Lula didn't give the picanha... but buy the Faz O L and you'll be able to buy picanhas (and much more) for life! 😎",
    picanhaImageAlt: "Delicious picanha that was promised but never delivered",
    videoSectionTitle: "Watch This Video!",  // Added video section title
    videoAlt: "Faz O L promotional video",  // Added alt for video
  },
  pt: {
    title: "Faz O L",
    memeText: "Quando o dólar chega a R$6:",
    slogan: "Faz O L! 👆",
    description: "A única cripto que sobe quando tudo desce!",
    buyButton: "Compre Faz O L Agora!",
    languageSwitch: "EN",
    tokenAddress: "Endereço do Token",
    pumpButton: "Ir para Pump.fun",
    howToBuy: "Como Comprar",
    step1: "Crie uma carteira Phantom",
    step2: "Compre alguns Solanas com cartão de crédito ou transfira Solana",
    step3: "Clique no link acima e compre o token",
    step4: "Conclua e lucre!",
    doubts: "Se tiver qualquer dúvida sobre como comprar pergunte no Telegram",
    picanhaSectionTitle: "Promessas de Picanha",
    picanhaJoke2: "A picanha o Lula não deu… mas compre o Faz O L e você vai poder comprar picanhas (e muito mais) pra vida toda! 😎",
    picanhaImageAlt: "Picanha deliciosa que foi prometida mas nunca entregue",
    videoSectionTitle: "Assista a Este Vídeo!",  // Adicionada a seção de vídeo
    videoAlt: "Vídeo promocional do Faz O L",  // Alt do vídeo
  }
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'pt'>('pt')
  const [isLoaded, setIsLoaded] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en')
  }

  const goToPumpFun = () => {
    window.open(`https://pump.fun/coin/{token}`, '_blank')
  }

  const goToTelegram = () => {
    window.open(`https://t.me/FazOL_Coin`, '_blank')
  }

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b from-green-400 to-green-100 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <header className="bg-green-500 p-4 md:p-6 text-white flex flex-col md:flex-row justify-between items-center shadow-xl gap-4 md:gap-0">
        <div className="w-full md:w-1/3"></div>
        <h1 className={`text-4xl text-white md:text-6xl font-bold text-center ${robotoMono.className} animate-pulse md:flex-1`}>
          {t.title}
        </h1>
        <div className="w-full md:w-1/3 flex justify-end">
          <button 
            onClick={toggleLanguage}
            className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full md:w-auto"
            aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
          >
            {t.languageSwitch}
          </button>
        </div>
      </header>

      <main className="flex-grow mt-14 flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 w-full md:max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="relative  w-full aspect-square max-w-[300px] mx-auto mb-4">
            <Image
              src="/fazol.jpeg"
              alt="Lula Meme"
              fill
              className="rounded-xl animate-gentle-bounce object-cover"
            />
          </div>
          <p className="text-lg md:text-xl text-center mb-4">
            {t.memeText} <span className="font-semibold text-green-700 animate-pulse">{t.slogan}</span>
          </p>
          <p className="text-center text-gray-600 text-sm md:text-base">{t.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full md:max-w-md">
          <p className="font-semibold text-base md:text-lg mb-2">{t.tokenAddress}:</p>
          <div className="w-full overflow-x-auto">
            <button 
              onClick={goToPumpFun}
              className="text-center text-blue-600 hover:underline mb-4 transition-colors duration-300 ease-in-out text-sm md:text-base break-all"
            >
              TOKEN
            </button>
          </div>
          
          <button
            onClick={goToPumpFun}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full w-full mb-6 transition-colors duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base"
          >
            {t.pumpButton}
          </button>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t.howToBuy}</h2>
            <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-sm md:text-base">
              <li>{t.step1}</li>
              <li>{t.step2}</li>
              <li>{t.step3}</li>
              <li>{t.step4}</li>
            </ol>
            <p className="mt-4 text-sm md:text-base">{t.doubts}</p>
          </div>
          
          <div className='text-center'>
            <button 
              onClick={goToTelegram} 
              className="bg-blue-500 mt-3 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105 text-base md:text-lg"
            >
              Telegram
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full md:max-w-md">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{t.picanhaSectionTitle}</h2>
          <div className="relative w-full aspect-video max-w-[300px] mx-auto mb-4">
            <Image
              src="/picanha.jpeg"
              alt={t.picanhaImageAlt}
              fill
              className="rounded-lg animate-float object-cover"
            />
          </div>
          <div className="space-y-4 text-sm md:text-base">
            <p>{t.picanhaJoke2}</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full md:max-w-md">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{t.videoSectionTitle}</h2>
          <div className="relative w-full aspect-video max-w-[300px] mx-auto mb-4">
            <video controls className="rounded-lg w-full">
              <source src="/promo_video.mp4" type="video/mp4" />
              {t.videoAlt}
            </video>
          </div>
        </div>
      </main>
    </div>
  )
}