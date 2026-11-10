AULA.unit({
  n: 8, title: 'El turista accidental', ko: '우연한 여행자 — 여행 일화',
  goal: '진짜 또는 지어낸 일화 이야기하기, 관심 보이며 듣기, 원인과 결과 말하기',
  can: ['과거완료 (pluscuamperfecto)', '과거 시제 종합', '원인·결과 연결어 (como, así que, de modo que)', '맞장구치기'],
  tags: ['pluscuamperfecto', 'tiempos del pasado', 'anécdotas', 'causa y consecuencia', 'viajes', 'tipos de turismo'],
  vocab: [
    { g: '여행 · Viajes', w: [['el billete de ida y vuelta', '왕복표'], ['facturar la maleta', '짐을 부치다'], ['la tarjeta de embarque', '탑승권'], ['perder el vuelo', '비행기를 놓치다'], ['el retraso', '지연'], ['cancelar', '취소하다'], ['el alojamiento', '숙소'], ['el albergue', '호스텔'], ['hacer escala', '경유하다'], ['la aduana', '세관'], ['extraviar el equipaje', '짐을 분실하다'], ['hacer autostop', '히치하이크하다']] },
    { g: '여행 종류 · Tipos de turismo', w: [['el turismo rural', '농촌 관광'], ['el turismo de aventura', '모험 관광'], ['el turismo cultural', '문화 관광'], ['el ecoturismo', '생태 관광'], ['el turismo de sol y playa', '휴양 관광'], ['el viaje organizado', '패키지여행'], ['viajar de mochilero', '배낭여행하다'], ['el crucero', '크루즈']] },
    { g: '듣는 사람의 반응', w: [['¿Ah, sí?', '아, 그래?'], ['¿Y qué pasó?', '그래서 어떻게 됐어?'], ['¡No me digas!', '설마!'], ['¡Qué fuerte!', '대박!'], ['¡Qué mala suerte!', '운이 없었네!'], ['¿En serio?', '진짜?'], ['¡Menos mal!', '다행이다!']] }
  ],
  gram: [
    { h: '과거완료 (pluscuamperfecto)', p: '과거의 어떤 시점보다 **더 먼저** 일어난 일. **había** + 과거분사.', t: [['', 'haber', '+ 과거분사'], ['yo', 'había', 'salido'], ['tú', 'habías', 'perdido'], ['él/ella/usted', 'había', 'visto'], ['nosotros/-as', 'habíamos', ''], ['vosotros/-as', 'habíais', ''], ['ellos/ellas/ustedes', 'habían', '']], ex: [['Cuando llegué al aeropuerto, el avión ya había salido.', '공항에 도착했을 때 비행기는 이미 떠났었다.']] },
    { h: '과거 시제 4종 정리', t: [['시제', '쓰임', '예'], ['단순과거', '사건', 'Perdí el pasaporte.'], ['불완료과거', '배경·상황', 'Era de noche y llovía.'], ['과거완료', '더 이전의 일', 'Lo había dejado en el taxi.'], ['현재완료', '지금과 연결된 경험', 'Nunca he vuelto a ese hotel.']] },
    { h: '원인·결과 연결어', t: [['원인', '결과'], ['porque, como, es que', 'así que, de modo que, por eso']], ex: [['Como no había autobuses, fuimos andando.', '버스가 없어서 걸어갔다.'], ['Perdimos el tren, así que dormimos en la estación.', '기차를 놓쳐서 역에서 잤다.']] }
  ],
  ex: [
    { k: 'fill', t: '과거완료 만들기', it: ['Cuando llegué, la película ya [había empezado]. (empezar)', 'No pude entrar porque [había olvidado] las llaves. (olvidar, yo)', 'Nunca [habíamos visto] el mar antes de ese viaje. (ver, nosotros)', 'Cuando llamé, ellos ya [habían salido]. (salir)', '¿[Habías estado] en Perú antes? (estar, tú)'] },
    { k: 'fill', t: '과거 시제 고르기', it: ['Cuando {*llegamos|llegábamos} al hotel, la recepción ya {cerró|*había cerrado}.', '{*Eran|Fueron} las tres de la madrugada y {*hacía|hizo} frío.', 'De repente {*apareció|aparecía} un hombre con una linterna.', 'Nunca {*he vuelto|volvía} a ese pueblo desde entonces.'] },
    { k: 'fill', t: '원인·결과 연결어', it: ['[Como] el vuelo se canceló, dormimos en el aeropuerto.', 'Perdí la maleta, [así que] tuve que comprar ropa.', 'No fuimos a la playa [porque] llovía.', 'Hacía mucho calor; [por eso] nos bañamos en el río.'] },
    { k: 'mc', t: '맞장구치기', it: [['— Y entonces vi que no tenía el pasaporte…', '*¡No me digas! ¿Y qué hiciste?|¡Qué bien!|Me alegro.'], ['— Al final, me lo devolvió un taxista.', '¡Qué mala suerte!|*¡Menos mal!|¡Qué pena!'], ['— Perdimos el último tren.', '*¡Qué mala suerte!|¡Qué suerte!|¡Enhorabuena!']] },
    { k: 'tf', t: '듣기 — 우연한 여행', listen: 1, text: 'Hace tres años viajé a Marruecos con mi hermana. Habíamos reservado un hotel en Marrakech, pero cuando llegamos, nos dijeron que no tenían nuestra reserva. Era muy tarde y estábamos agotadas. Entonces, un señor que había oído todo nos invitó a dormir en casa de su familia. Al principio teníamos un poco de miedo, pero fueron muy amables. Al final, nos quedamos con ellos cuatro días. ¡Fue el mejor viaje de mi vida!',
      it: [['Viajó a Marruecos con su hermana.', true], ['El hotel tenía su reserva.', false], ['Llegaron por la mañana.', false], ['Un señor las invitó a su casa.', true], ['Se quedaron una noche.', false]] },
    { k: 'sort', t: '여행 종류', cats: ['🏞️ naturaleza / aventura', '🏛️ cultura / ciudad'], it: [['hacer rafting', 0], ['visitar museos', 1], ['dormir en una tienda de campaña', 0], ['ver monumentos', 1], ['hacer escalada', 0], ['ir a la ópera', 1]] },
    { k: 'order', t: '일화 문장 만들기', it: ['Cuando llegué, el tren ya había salido.', 'Como no había taxis, fuimos andando.', 'Perdí la maleta, así que compré ropa nueva.', '¡No me digas! ¿Y qué pasó?'] },
    { k: 'dict', t: '받아쓰기', it: ['Nunca había visto tanta nieve.', 'Como llovía, nos quedamos en el hotel.', 'El avión ya había despegado.'] },
    { k: 'write', t: '여행 일화 (진짜 또는 가짜!)', d: '여행 중 있었던 일화를 과거 시제 4종과 원인·결과 연결어로 써 보세요. 친구들은 진짜인지 맞혀 봐요!', model: 'El verano pasado fui a Tokio con mis padres. El primer día habíamos planeado visitar un templo, pero como llovía muchísimo, entramos en un pequeño restaurante. Allí había un señor mayor que cantaba karaoke. De repente nos invitó a cantar con él. ¡Qué vergüenza! Nunca había cantado delante de desconocidos, así que elegí una canción de K-pop. Al final todos aplaudieron y el señor nos pagó la cena.' }
  ]
});
