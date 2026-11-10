AULA.unit({
  n: 12, title: 'Misterios y enigmas', ko: '미스터리와 수수께끼',
  goal: '가설과 추측 세우기, 미스터리한 사건 이야기하기, 확신의 정도 표현하기 — 과학의 미스터리 블로그 쓰기',
  can: ['추측의 미래·조건법', '확신 정도 + 직설법/접속법', 'creer / creerse / creer en', '초자연 현상 어휘'],
  tags: ['hipótesis', 'futuro de probabilidad', 'condicional de probabilidad', 'quizás', 'misterios', 'ciencia', 'fenómenos paranormales'],
  vocab: [
    { g: '미스터리 · Sucesos misteriosos', w: [['el fantasma', '유령', '👻'], ['el ovni', 'UFO', '🛸'], ['el extraterrestre', '외계인', '👽'], ['la casa encantada', '흉가'], ['la telepatía', '텔레파시'], ['la premonición', '예감'], ['la coincidencia', '우연의 일치'], ['el déjà vu', '데자뷔'], ['desaparecer', '사라지다'], ['aparecer', '나타나다'], ['la leyenda', '전설'], ['inexplicable', '설명할 수 없는']] },
    { g: '과학·심리 · Ciencia y psicología', w: [['la teoría', '이론'], ['la prueba', '증거'], ['demostrar', '증명하다'], ['investigar', '조사하다'], ['el cerebro', '뇌'], ['la mente', '마음·정신'], ['el sueño', '꿈'], ['el subconsciente', '잠재의식'], ['la casualidad', '우연'], ['tener una explicación', '설명이 가능하다']] },
    { g: '확신의 정도', w: [['Estoy seguro/-a de que…', '…라고 확신해 (+직설법)'], ['Seguro que…', '틀림없이… (+직설법)'], ['Me imagino que…', '…일 거라 생각해 (+직설법)'], ['Igual / A lo mejor…', '어쩌면… (+직설법)'], ['Quizás / Tal vez…', '아마도… (+직설법/접속법)'], ['Puede que…', '…일 수도 있어 (+접속법)'], ['Es posible que…', '…일 가능성이 있어 (+접속법)'], ['Dudo que…', '…인지 의심스러워 (+접속법)']] }
  ],
  gram: [
    { h: '추측의 미래형 (지금에 대한 추측)', ex: [['— ¿Dónde está Pablo? — Estará en casa.', '집에 있겠지.'], ['— ¿Qué hora es? — Serán las cinco.', '5시쯤 됐을 거야.']] },
    { h: '추측의 조건법 (과거에 대한 추측)', ex: [['— ¿Por qué no vino ayer? — Estaría enfermo.', '아팠겠지.'], ['Serían las tres de la mañana cuando oí el ruido.', '소리를 들었을 때 새벽 3시쯤이었을 거야.']] },
    { h: '확신 정도와 서법', t: [['직설법', '접속법'], ['Estoy seguro de que es verdad.', 'Puede que sea verdad.'], ['Seguro que tiene explicación.', 'Es posible que tenga explicación.'], ['A lo mejor es un truco.', 'Dudo que sea un truco.'], ['Quizás es un truco.', 'Quizás sea un truco.']] },
    { h: 'creer / creerse / creer en', ex: [['Creo que es mentira.', '거짓말인 것 같아. (생각)'], ['No me lo creo.', '난 그거 안 믿어. (말·이야기를 믿다)'], ['¿Crees en los fantasmas?', '유령의 존재를 믿어?']] }
  ],
  ex: [
    { k: 'fill', t: '추측의 미래형 / 조건법', it: ['— No contesta. — [Estará] durmiendo. (estar, 지금)', '— ¿Cuántos años tiene? — [Tendrá] unos cuarenta. (tener, 지금)', '— ¿Por qué no vino Luis? — [Tendría] mucho trabajo. (tener, 과거)', '— ¿Quién llamó anoche? — [Sería] tu madre. (ser, 과거)', '— ¿Dónde están mis llaves? — Las [habrás] dejado en el coche. (haber)'] },
    { k: 'fill', t: '직설법? 접속법?', it: ['Estoy segura de que {*existe|exista} vida en otros planetas.', 'Es posible que {existe|*exista} vida en otros planetas.', 'Puede que {es|*sea} una coincidencia.', 'A lo mejor {*es|sea} un sueño.', 'Dudo que los fantasmas {existen|*existan}.', 'Seguro que {*hay|haya} una explicación científica.'] },
    { k: 'fill', t: 'creer / creerse / creer en', it: ['Mi abuela [cree en] los fantasmas.', '¿Te [crees] todo lo que dice internet?', '[Creo] que la historia es falsa.', 'No me lo [creo]: ¡es imposible!'] },
    { k: 'sort', t: '확신 정도', cats: ['💯 확실', '🤔 가능성', '🙅 의심'], it: [['Estoy convencido de que…', 0], ['Puede que…', 1], ['Dudo que…', 2], ['Seguro que…', 0], ['A lo mejor…', 1], ['No creo que…', 2]] },
    { k: 'tf', t: '읽기 — 과학 블로그: 데자뷔', text: '¿Te ha pasado alguna vez que entras en un sitio nuevo y sientes que ya has estado allí? Es el famoso **déjà vu**. Mucha gente cree que es una premonición o un recuerdo de otra vida. Sin embargo, los científicos piensan que probablemente es un pequeño «error» del cerebro: la memoria procesa la información dos veces. Es posible que sea más frecuente cuando estamos cansados o estresados. ¿Tú qué crees?',
      it: [['El déjà vu es la sensación de haber vivido algo antes.', true], ['Los científicos están seguros de que es una premonición.', false], ['Podría ser un error de la memoria.', true], ['Es posible que ocurra más con estrés.', true]] },
    { k: 'dlg', t: '듣기 — 이상한 사건', listen: 1,
      lines: [['Raquel', 'Anoche pasó algo rarísimo. Serían las tres cuando oí música en el salón.'], ['Toni', '¿En serio? Igual te dejaste la tele encendida.'], ['Raquel', 'No, estoy segura de que la apagué. Y vivo sola.'], ['Toni', 'Pues puede que sea el vecino. Las paredes de tu edificio son finísimas.'], ['Raquel', 'Mmm, quizás… pero era la canción favorita de mi abuela.'], ['Toni', '¡Qué miedo! Bueno, seguro que es una coincidencia.']],
      it: [['소리를 들은 시각은?', '자정쯤|*새벽 3시쯤|아침 6시'], ['Toni의 첫 번째 가설은?', '유령|*TV를 켜 두었다|이웃'], ['Raquel이 확신하는 것은?', '*TV를 껐다|이웃이 있다|꿈이었다'], ['그 노래는?', '*할머니가 가장 좋아한 노래|이웃의 노래|Raquel의 노래']] },
    { k: 'order', t: '문장 만들기', it: ['Es posible que sea una coincidencia.', 'Estará en casa de sus padres.', 'No creo en los fantasmas.', 'Serían las doce cuando ocurrió.'] },
    { k: 'dict', t: '받아쓰기', it: ['Puede que tenga una explicación.', 'Seguro que es un truco.', '¿Tú crees en los extraterrestres?'] },
    { k: 'write', t: '미스터리 블로그 포스트', d: '알고 있는 미스터리(버뮤다 삼각지대, 나스카 라인 등) 또는 직접 겪은 이상한 일을 소개하고, 여러 가설을 확신 정도 표현으로 써 보세요.', model: 'Las líneas de Nazca, en Perú, son unos dibujos gigantes en el desierto que solo se ven bien desde el aire. ¿Quién los haría y para qué? Algunas personas creen que los hicieron extraterrestres, pero dudo que sea así. Es posible que fueran un calendario astronómico. A lo mejor eran caminos para ceremonias religiosas. De lo que estoy seguro es de que los nazcas eran unos ingenieros increíbles.' }
  ]
});
