"use client"  // This is a client-side only file
import {useState} from 'react'
import{SliderItems} from '../components/widgets/SliderItems'
import Headers from '../components/widgets/Headers'
import {Arrows} from '../components/widgets/Arrows'
import {SliderThumpnail} from '../components/widgets/SliderThumpnail'


export default function Home() {
  const [itemsActive, setItemsActive] = useState<number>(4)
  const countItems = 4
  const onPrev = () => {
    if(itemsActive > 1){
      setItemsActive(itemsActive - 1)
    }else{
      setItemsActive(countItems)
    }
  }
  const onNext = () => {
    if(itemsActive < countItems){
      setItemsActive(itemsActive + 1)
    }else{
      setItemsActive(1)
    }
  }

  return (
    <>
    <Headers/>
    <div className='h-screen relative'>
      <ul >
      <SliderItems itemsActive={itemsActive} id={1} image="/img/1.png" brand="Ford" name="Mustang" description="El Ford Mustang es un icónico coche deportivo estadounidense, conocido por su potente rendimiento y diseño distintivo. Desde su debut en 1964, se ha convertido en un símbolo de la cultura automovilística americana."/>

      <SliderItems itemsActive={itemsActive} id={2} image="/img/2.png" brand="Jeep" name="Wrangler" description="El Jeep Wrangler es un SUV robusto y versátil, famoso por su capacidad todoterreno excepcional. Su diseño único y su legado en actividades al aire libre lo hacen popular entre los aventureros."/>

      <SliderItems itemsActive={itemsActive} id={3} image="/img/3.png" brand="Dodge" name="GTO" description="El Dodge GTO, conocido por su rendimiento y estilo musculoso, es un clásico del segmento de coches deportivos americanos. Su potencia y diseño agresivo lo destacan como un verdadero ícono de la carretera."/>

      <SliderItems itemsActive={itemsActive} id={4} image="/img/4.png" brand="Chevrolet" name="Camaro" description="El Chevrolet Camaro es un coche deportivo con una rica historia en el automovilismo. Conocido por su diseño elegante y su potente rendimiento, es una opción popular para los entusiastas del automovilismo."/>


      </ul>
      <Arrows onClickPrev={()=>onPrev()} onClickNext={()=>onNext()} />
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        <SliderThumpnail itemsActive={itemsActive} id={1} image="/img/1.png" />
        <SliderThumpnail itemsActive={itemsActive} id={2} image="/img/2.png" />
        <SliderThumpnail itemsActive={itemsActive} id={3} image="/img/3.png" />
        <SliderThumpnail itemsActive={itemsActive} id={4} image="/img/4.png" />

      </ul>
    </div>

    </>
  )
}
