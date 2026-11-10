AULA.unit({
  n: 2, title: 'Mañana', ko: '내일 — 미래 상상하기',
  goal: '미래의 일과 상황 말하기, 조건 표현하기, 미래에 대한 가설 세우기',
  can: ['미래형 (futuro imperfecto)', 'si + 현재, 미래', 'depende de (si)', 'seguramente / seguro que / supongo que', '미래 시간 표현'],
  tags: ['futuro', 'condiciones', 'si + presente', 'hipótesis', 'problemas del mundo', 'predicciones'],
  vocab: [
    { g: '세계 문제 · Problemas del mundo', w: [['el cambio climático', '기후 변화'], ['la contaminación', '오염'], ['la sequía', '가뭄'], ['la superpoblación', '인구 과잉'], ['la pobreza', '빈곤'], ['el hambre', '기아'], ['la desigualdad', '불평등'], ['las energías renovables', '재생 에너지'], ['la inteligencia artificial', '인공지능'], ['los recursos naturales', '천연자원'], ['el deshielo', '빙하가 녹음'], ['la extinción de especies', '종의 멸종']] },
    { g: '미래 시간 표현', w: [['mañana', '내일'], ['pasado mañana', '모레'], ['la semana que viene', '다음 주'], ['el año próximo', '내년'], ['dentro de diez años', '10년 후에'], ['a finales de siglo', '세기말에'], ['en el futuro', '미래에'], ['algún día', '언젠가'], ['cuando sea mayor', '어른이 되면']] },
    { g: '확신의 정도', w: [['seguro que', '틀림없이'], ['seguramente', '아마 틀림없이'], ['probablemente', '아마'], ['supongo que', '~일 것 같아'], ['quizás', '어쩌면'], ['depende', '경우에 따라 달라']] }
  ],
  gram: [
    { h: '미래형 — 규칙', p: '원형 **전체**에 어미를 붙여요. 세 그룹 모두 같아요!', t: [['', 'viajar', 'ser', 'vivir'], ['yo', 'viajaré', 'seré', 'viviré'], ['tú', 'viajarás', 'serás', 'vivirás'], ['él/ella/usted', 'viajará', 'será', 'vivirá'], ['nosotros/-as', 'viajaremos', 'seremos', 'viviremos'], ['vosotros/-as', 'viajaréis', 'seréis', 'viviréis'], ['ellos/ellas/ustedes', 'viajarán', 'serán', 'vivirán']] },
    { h: '미래형 — 불규칙 어간', t: [['원형', '어간', 'yo'], ['tener', 'tendr-', 'tendré'], ['poder', 'podr-', 'podré'], ['salir', 'saldr-', 'saldré'], ['venir', 'vendr-', 'vendré'], ['poner', 'pondr-', 'pondré'], ['saber', 'sabr-', 'sabré'], ['hacer', 'har-', 'haré'], ['decir', 'dir-', 'diré'], ['querer', 'querr-', 'querré'], ['haber', 'habr-', 'habrá']] },
    { h: '조건문: si + 현재, 미래', ex: [['Si apruebo, iré a la universidad en Madrid.', '합격하면 마드리드에 있는 대학에 갈 거야.'], ['Si no reducimos la contaminación, el planeta sufrirá.', '오염을 줄이지 않으면 지구가 고통받을 것이다.']], tip: '**si** 뒤에는 미래형을 쓰지 않아요! ×Si aprobaré…' },
    { h: 'depende de / depende de si', ex: [['— ¿Irás a la playa? — Depende del tiempo.', '날씨에 따라 달라.'], ['Depende de si tengo dinero.', '돈이 있는지에 따라 달라.']] },
    { h: '추측: seguramente / seguro que / supongo que + 미래', ex: [['Seguro que dentro de 20 años los coches volarán.', '20년 후엔 틀림없이 차가 날 거야.'], ['Supongo que viviré en otro país.', '아마 다른 나라에 살 것 같아.']] }
  ],
  ex: [
    { k: 'fill', t: '규칙 미래형', it: ['El año que viene [viajaré] a Colombia. (viajar, yo)', 'En 2050 la gente [vivirá] más años. (vivir)', '¿[Estudiarás] Medicina? (estudiar, tú)', 'Los robots [harán] muchos trabajos. (hacer)', 'Nosotros [seremos] más conscientes del medioambiente. (ser)'] },
    { k: 'fill', t: '불규칙 미래형', it: ['Mañana no [podré] ir a clase. (poder, yo)', '[Tendremos] que ahorrar agua. (tener, nosotros)', '¿Qué [dirá] tu madre? (decir)', 'El tren [saldrá] a las ocho. (salir)', '¿[Vendréis] a la fiesta? (venir, vosotros)', 'En el futuro [habrá] menos petróleo. (haber)'] },
    { k: 'fill', t: 'si + 현재, 미래', it: ['Si [llueve] mañana, no iremos a la playa. (llover)', 'Si apruebas, te [compraré] un regalo. (comprar, yo)', 'Si no [cuidamos] los océanos, desaparecerán muchas especies. (cuidar)', 'Si tienes tiempo, [podrás] venir con nosotros. (poder)'] },
    { k: 'mc', t: '문법 오류 찾기', d: '올바른 문장을 고르세요.', it: [['', '*Si tengo dinero, viajaré.|Si tendré dinero, viajaré.|Si tengo dinero, viajo mañana será.'], ['', 'Depende si el tiempo.|*Depende del tiempo.|Depende de que el tiempo.'], ['', '*Seguramente lloverá mañana.|Seguramente llover mañana.|Seguro llueve que mañana.']] },
    { k: 'tf', t: '듣기 — 2050년 예측', listen: 1,
      text: 'Según los expertos, en 2050 seremos casi diez mil millones de personas en el planeta. Seguramente la mayoría vivirá en grandes ciudades. La inteligencia artificial hará muchos trabajos que ahora hacemos los humanos, y probablemente trabajaremos menos horas. Pero si no reducimos las emisiones, la temperatura subirá y habrá más sequías. Todo dependerá de las decisiones que tomemos hoy.',
      it: [['En 2050 habrá unos diez mil millones de personas.', true], ['La mayoría vivirá en el campo.', false], ['Probablemente trabajaremos más horas.', false], ['Si no reducimos emisiones, habrá más sequías.', true]] },
    { k: 'match', t: '문제와 해결책', it: [['la contaminación del aire', 'usar transporte público y coches eléctricos'], ['la sequía', 'ahorrar agua y reciclarla'], ['el exceso de plástico', 'usar bolsas reutilizables'], ['la desigualdad', 'garantizar educación para todos'], ['el cambio climático', 'apostar por energías renovables']] },
    { k: 'sort', t: '확신 정도', cats: ['💯 확실', '🤔 가능성'], it: [['Seguro que', 0], ['Quizás', 1], ['Estoy convencido de que', 0], ['Probablemente', 1], ['Sin duda', 0], ['A lo mejor', 1]] },
    { k: 'order', t: '문장 만들기', it: ['Si apruebo el examen, iré a la fiesta.', 'Dentro de diez años viviré en otro país.', 'Seguro que mañana hará buen tiempo.', 'Depende de si tengo tiempo.'] },
    { k: 'dict', t: '받아쓰기', it: ['El año que viene tendré más tiempo.', 'Si llueve, nos quedaremos en casa.', 'Supongo que habrá menos coches.'] },
    { k: 'write', t: '10년 후의 나', d: '10년 후 나와 세상은 어떨까요? 미래형, si 조건문, seguramente/supongo que를 사용하세요.', model: 'Dentro de diez años tendré veintiséis años. Seguramente viviré en Madrid y trabajaré como ingeniera de energías renovables. Si consigo una beca, haré un máster en Alemania. Supongo que no tendré coche porque habrá muchos coches compartidos. El mundo será diferente: si cuidamos el planeta, habrá más bosques y ciudades más limpias.' }
  ]
});
